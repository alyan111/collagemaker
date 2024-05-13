<?php

namespace App\Http\Controllers;

use App\Http\Resources\Template as ResourcesTemplate;
use App\Http\Resources\TemplateResource;
use App\Models\Template;
use App\Models\TemplateImage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TemplateController extends Controller
{
    function read(Request $request, $uni)
    {
        return TemplateResource::collection(Template::where("uni", $uni)->get())->toArray($request);
        $template = TemplateResource::collection(Template::where("uni", $uni)->get());
        return response()->json(['template' => $template]);
    }
    function store(Request $request)
    {
        $request->validate([
            'items.*.id' => 'required',
            'items.*.src' => 'required',
            'items.*.x' => 'required',
            'items.*.y' => 'required',
            'items.*.rotation' => 'required',
            'items.*.image' => 'required|image',
        ]);
        foreach ($request->items as $item) {
            $id = $item['id'];
            $src = $item['src'];
            $x = $item['x'];
            $y = $item['y'];
            $rotation = $item['rotation'];
            $image = $item['image'];
            $name = random_int(1, 999999) . round(microtime(true)) . '.' . $image->extension();
            Storage::disk("public")->putFileAs("/templates", $image, $name);
            return response()->json([
                'data' => $item['image']->extension()
            ]);
        }


        $template = Template::create([
            "title" => $request->title,
            "tags" => $request->tags,
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
            Storage::disk("public")->putFileAs("/templates", $img, $name);
            $ti = TemplateImage::create([
                "uni" => $uni,
                "width" => $request->input('width')[$i],
                "height" => $request->input('height')[$i],
                "x_axis" => $request->input('x_axis')[$i],
                "y_axis" => $request->input('y_axis')[$i],
                "rotation" => $request->input('rotation')[$i],
                "scale" => $request->input('scale')[$i],
                "image" => $name,
                "template_id" => $template->id,
            ]);
            $templateImages[] = $ti;
        }
        return response()->json([
            'template' => "Data added"
        ]);

        return response()->json([
            'template' => [
                "template" => $template,
                "images" => $templateImages,
            ]
        ]);
    }
}
