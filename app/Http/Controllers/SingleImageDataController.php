<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\SingleImageDataResource;
use App\Http\Resources\SizeResource;
use App\Models\Category;
use App\Models\SingleImageData;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SingleImageDataController extends Controller
{
    function assetsCreate(Request $request)
    {
        $categories = (new CategoryCollection(Category::where('show', 1)->orderByDesc('id')->get()))->toArray($request);
        return Inertia::render('Asset/Create', [
            'title' => "Add Asset",
            'categories' => $categories,
            'headerOptions' => [
                [
                    "type" => "action",
                    "title" => "Create",
                    "href" => "single.image.create.view",
                ],
            ],
        ]);
    }

    function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string',
            // 'category_id' => 'required|integer',
            'image' => 'required|image',
            'category_name' => 'required|string',
            'category_id' => 'required|string',
        ]);
        $storagePath = $request->type . "/" . $request->category_id;
        $image = $request->file("image");
        $name = random_int(1, 999999) . round(microtime(true)) . '.' . $image->extension();
        Storage::disk("public")->putFileAs($storagePath, $image, $name);

        $asset = SingleImageData::create([
            "image" => $storagePath . "/" . $name,
            "thumbnail" => $storagePath . "/" . $name,
            "type" => $request->type,
            "category_id" => $request->category_id,
            "user_id" => $request->user_id,
        ]);

        return response()->json([
            'message' => $request->type . " added",
            'data' => $asset,
        ]);
    }

    function create(Request $request)
    {
        return Inertia::render('Template/Create', [
            'title' => "Create Asset",
            'headerOptions' => [
                [
                    "type" => "action",
                    "title" => "Create",
                    "href" => "single.image.create.view",
                ],
            ],
        ]);
    }
    function index(Request $request, $type)
    {
        if ($type === "all")
            return SingleImageDataResource::collection(SingleImageData::all());
        if ($type === "sizes")
            return SizeResource::collection(Size::all());
        else
            return SingleImageDataResource::collection(SingleImageData::where("type", $type)->get());
    }

    function downloadTest(Request $request)
    {
        $file = SingleImageData::find(21);
        return Storage::disk('local')->download($file->image);
    }

    function testSave(Request $request)
    {
        return response()->json(['message' => count($request->file('file'))]);
        if ($request->hasFile("file")) {
            $cv = Storage::disk("local")->put('/', $request->file('file'));
        }
        SingleImageData::create([
            'image' => $cv,
            'type' => "test",
            'thumbnail' => $cv,
        ]);
        return response()->json(['message' => "Response successful"]);
    }
}
