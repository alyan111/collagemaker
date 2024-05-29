<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\TemplateResource;
use App\Models\Category;
use App\Models\Template;
use App\Models\TemplateImage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TemplateController extends Controller
{
    function index(Request $request)
    {
        $templates = TemplateResource::collection(Template::orderBy('id', 'desc')->get())->toArray($request);
        return Inertia::render('Template/Index', [
            'title' => "Manage Templates",
            'templates' => $templates,
            'headerOptions' => [
                [
                    "type" => "link",
                    "title" => "Create",
                    "href" => "create.new.template.view",
                ],
            ],
        ]);
    }
    function create(Request $request)
    {
        $user = Auth::user();
        $token = $user->createToken(env('APP_NAME' . " Authenticatoin", "Auth Token"))->plainTextToken;
        $categories = (new CategoryCollection(Category::where('show', 1)->orderByDesc('id')->get()))->toArray($request);
        return Inertia::render('Template/Create', [
            'title' => "Create Asset",
            'categories' => $categories,
            'apiToken' => $token,
            'headerOptions' => [
                [
                    "type" => "action",
                    "title" => "Add Image",
                    "href" => "single.image.create.view",
                ],
                [
                    "type" => "action",
                    "title" => "Create",
                    "href" => "single.image.create.view",
                ],
            ],
        ]);
    }
    function readAll(Request $request)
    {
        $categoriezedTemplates = Template::all()->groupBy('category_id');
        $response = [];
        foreach ($categoriezedTemplates as $categoryName => $templates) {
            $name = Category::where("uni", $categoryName)->first()['name'];
            $response[] = ['name' => $name, 'templates' => TemplateResource::collection($templates)->toArray($request)];

        }
        // $templates = TemplateResource::collection(Template::all()->groupBy('category_id'))->toArray($request);
        return response()->json(['templates' => $response]);
    }
    function read(Request $request, $uni)
    {
        return TemplateResource::collection(Template::where("uni", $uni)->get())->toArray($request);
        $template = TemplateResource::collection(Template::where("uni", $uni)->get());
        return response()->json(['template' => $template]);
    }
    function updateImage(Request $request, $uni)
    {
        $templateImage = TemplateImage::where("uni", $uni)->get()[0];
        $templateImage->x_axis = $request->x_axis;
        $templateImage->y_axis = $request->y_axis;
        $templateImage->coordinates = $request->coordinates;
        $templateImage->save();
        return response()->json($templateImage);
    }

    function store(Request $request)
    {
        $templateData = [];
        if ($request->input('source') === 'panel') {
            $templateUni = Str::uuid();
            $templateData = [
                "title" => $request->title,
                "tags" => $request->tags ? $request->tags : "-",
                "height" => $request->height ? $request->height : "720",
                "width" => $request->width ? $request->width : "720",
                "user_id" => Auth::user()->id,
                "category_id" => $request->category_id,
                // "user_id" => $request->user_id,
                "uni" => $templateUni,
            ];
            foreach ($request->items as $index => $item) {
                if ($index == 0) {
                    $name = str_replace(".", "", str_replace(" ", "", $templateUni . microtime() . random_int(1001, 2000))) . '.' . $item['image']->extension();
                    $path = Storage::disk("public")->putFileAs("/templates", $item['image'], $name);
                    $templateData['thumbnail'] = $path;
                    continue;
                }
                if ($index == 1) {
                    $name = str_replace(".", "", str_replace(" ", "", $templateUni . microtime() . random_int(1, 1000))) . '.' . $item['image']->extension();
                    $path = Storage::disk("public")->putFileAs("/templates", $item['image'], $name);
                    $templateData['white_image'] = $path;
                    $template = Template::create($templateData);
                    continue;
                }
                // $id = $item['id'];
                // $src = $item['src'];
                // $x = $item['x'];
                // $y = $item['y'];
                // $rotation = $item['rotation'];
                $image = $item['image'];
                $uni = Str::uuid();
                $name = $uni . round(microtime(true)) . random_int(1, 999) . '.' . $image->extension();
                $path = Storage::disk("public")->putFileAs("/templates", $image, $name);
                $isFrame = $item['isFrame'];
                TemplateImage::create([
                    "uni" => $uni,
                    "image" => $path,
                    "isFrame" => $isFrame,
                    "coordinates" => $isFrame == 1 ? ['bottom' => "0", "top" => "0", "left" => "0", "right" => "0"] : "",
                    "template_id" => $template->id,
                    // "image" => $name,
                ]);
            }
            return response()->json([
                'template' => "message"
            ]);

        }

        try {
            $template = Template::create([
                // "title" => $request->title,
                // "tags" => $request->tags,
                "title" => "text title " . random_int(1, 100),
                "tags" => "tagsss gsss " . random_int(1, 100),
                // "user_id" => Auth::user()->id,//
                "user_id" => $request->user_id,
                "uni" => Str::uuid(),
            ]);
            // $i = count($request->file('image'));
            $i = 0;
            $templateImages = array();

            // $bgName = Str::uuid() . random_int(1, 999999) . round(microtime(true)) . '.' . $request->file("bg")->extension();
            // Storage::disk("public")->putFileAs("/templates", $request->file("bg"), $bgName);
            foreach ($request->file("image") as $img) {
                // if (!$img->isValid())
                //     continue;
                $uni = Str::uuid();
                $name = $uni . random_int(1, 999999) . round(microtime(true)) . '.' . $img->extension();
                $path = Storage::disk("public")->putFileAs("/templates", $img, $name);
                $ti = TemplateImage::create([
                    "uni" => $uni,
                    "width" => $request->input('width')[$i],
                    "height" => $request->input('height')[$i],
                    "x_axis" => $request->input('x_axis')[$i],
                    "y_axis" => $request->input('y_axis')[$i],
                    "rotation" => $request->input('rotation')[$i],
                    "scale" => $request->input('scale')[$i],
                    "image" => $path,
                    // "image" => $name,
                    "template_id" => $template->id,
                ]);
                $templateImages[] = $ti;
            }
            // return response()->json([
            //     'template' => "Data added"
            // ]);

            return response()->json([
                'template' => [
                    "template" => $template,
                    "images" => $templateImages,
                ]
            ]);

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
