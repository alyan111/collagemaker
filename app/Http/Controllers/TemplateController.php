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
use Illuminate\Support\Facades\Cache;

class TemplateController extends Controller
{

    // function updateFrameCount(Request $request)
    // {
    //     $templates = Template::all();
    //     foreach ($templates as $key => $template) {
    //         $numberOfFrames = TemplateImage::where("template_id", $template->id)
    //             ->where("isFrame", 1)->count();
    //         $template->frameCount = $numberOfFrames;
    //         $template->save();
    //     }
    // }

    function updateFrameCount(Request $request)
    {
        $templates = Template::all();
    }

    function delete(Request $request, $uni)
    {
        $template = Template::where("uni", $uni)->first();
        if (Storage::disk('public')->exists($template['thumbnail']))
            Storage::disk('public')->delete($template['thumbnail']);
        if (Storage::disk('public')->exists($template['white_image']))
            Storage::disk('public')->delete($template['white_image']);
        $templateImages = TemplateImage::where("template_id", $template->id)->get();
        foreach ($templateImages as $key => $img) {
            $filename = $img['image'];
            if (Storage::disk('public')->exists($filename))
                Storage::disk('public')->delete($filename);
            $img->delete();
        }
        $template->delete();
        return response()->json(["message" => "Template deleted"]);
    }
    function index(Request $request)
    {
        $user = Auth::user();
        $token = $user->createToken(env('APP_NAME' . " Authenticatoin", "Auth Token"))->plainTextToken;
        // $templates = TemplateResource::collection(Template::where("category_id", "2d9791c1-c75e-42f0-8a6a-59316c24e551")->orderBy('id', 'asc')->get())->toArray($request);
        $templates = TemplateResource::collection(Template::orderBy('id', 'desc')->get())->toArray($request);
        $temp = ["id" => "all", "name" => "All Categories"];
        $categories = (new CategoryCollection(Category::where('show', 1)->orderByDesc('id')->get()))->toArray($request);
        array_unshift($categories, $temp);
        return Inertia::render('Template/Index', [
            'title' => "Manage Templates",
            'categories' => $categories,
            'templates' => $templates,
            'token' => $token,
            'headerOptions' => [
                [
                    "type" => "link",
                    "title" => "Create",
                    "href" => "create.new.template.view",
                ],
            ],
        ]);
    }
    function edit(Request $request, string $uni)
    {
        $template = new TemplateResource(Template::where("uni", $uni)->get()[0]);
        $user = Auth::user();
        $token = $user->createToken(env('APP_NAME' . " Authenticatoin", "Auth Token"))->plainTextToken;
        return Inertia::render('Template/Edit', [
            'title' => "Update Template",
            'template' => $template,
            'apiToken' => $token,
            'headerOptions' => [
                [
                    "type" => "action",
                    "title" => "Update",
                    "href" => "single.image.create.view",
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

        // $response = Cache::get('allTemplates');
        // if ($response === null) {
        $response = [];
        foreach (Category::with(['templates' => function ($query) {
            $query->take(5);
        }
        ])->get() as $category) {
            $response[] = [
                'name' => $category['name'],
                'templates' => TemplateResource::collection($category['templates'])->toArray($request)
            ];
        }
        // Cache::put('allTemplates', $response, 1440);
        // }

        // // initial
        // foreach (Template::all()->groupBy('category_id') as $categoryUni => $templates) {
        //     $response[] = [
        //         'name' => Category::where("uni", $categoryUni)->first()['name'],
        //         'templates' => TemplateResource::collection($templates)->toArray($request)
        //     ];
        // }
        return response()->json(['templates' => $response]);
    }
    function read(Request $request, $uni)
    {
        // return TemplateResource::collection(Template::where("uni", $uni)->get())->toArray($request);
        $template = TemplateResource::collection(Template::where("uni", $uni)->get());
        return response()->json(['response' => $template]);
    }
    function updateImage(Request $request, $uni)
    {

        if ($request->hasFile('image') && $request->purpose === 'updateImage') {
            $target = "";
            if ($request->type === 'image') {
                $target = TemplateImage::where("uni", $uni)->first();
                $previouseImage = asset(Storage::url($target->image));
                $previouseName = pathinfo($target->image, PATHINFO_FILENAME);
                // return response()->json(['modifying' => "images", "data" => $target]);
            } else {
                $target = Template::where("uni", $uni)->first();
                $image = $request->type === 'thumbnail' ? $target->thumbnail : $target->white_image;
                $previouseImage = asset(Storage::url($image));
                $previouseName = pathinfo($image, PATHINFO_FILENAME);
                // return response()->json(['modifying' => "template", "data" => $target]);
            }
            $newExtension = $request->image->getClientOriginalExtension();
            $newFileName = $previouseName . "." . $newExtension;
            if (Storage::exists($previouseImage)) {
                Storage::delete($previouseImage);
            }
            $path = Storage::disk("public")->putFileAs("/templates", $request->image, $newFileName);
            if ($request->type === 'image')
                $target->image = $path;
            if ($request->type === 'thumbnail')
                $target->thumbnail = $path;
            if ($request->type === 'shade')
                $target->white_image = $path;
            $target->save();
            // deleting here
            return ['message' => ucfirst($request->type) . " has been updated"];
        }
        $templateImage = TemplateImage::where("uni", $uni)->get()[0];
        $templateImage->update($request->all());
        return response()->json(['message' => "Updated"]);
    }
    function store(Request $request)
    {
        $templateData = [];
        if ($request->input('source') === 'panel') {
            $templateUni = Str::uuid();
            $templateData = [
                "frameCount" => $request->frameCount,
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
                $data = [
                    "uni" => $uni,
                    "image" => $path,
                    "isFrame" => $isFrame,
                    "isTop" => $item['isTop'],
                    "shapeType" => $item['shapeType'],
                    "isText" => $item['isText'],
                    "coordinates" => $isFrame == 1 ? ['bottom' => "0", "top" => "0", "left" => "0", "right" => "0"] : "",
                    "template_id" => $template->id,
                    // "image" => $name,
                ];
                if ($item['isText']) {
                    $data['imageText'] = $item['text'];
                }
                TemplateImage::create($data);
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
