<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    function manage(Request $request)
    {
        if ($request->actionType === "delete") {
            $uni = $request->uni;
            Category::where("uni", $uni)->get()[0]->delete();
            return response()->json(['message' => 'Category deleted successfully']);
        } else if ($request->actionType === "store") {
            $name = $request->name;
            Category::create([
                'name' => $name,
                'type' => $request->type,
                'uni' => Str::uuid(),
                'thumbnail' => "nill",

            ]);
            return response()->json(['message' => 'Category added successfully']);
        }
        return abort(400);
    }
    function view(Request $request)
    {
        $data = (new CategoryCollection(Category::where('show', 1)->orderByDesc('id')->get()))->toArray($request);
        $title = "Manage Categories";
        return Inertia::render('Category/Index', [
            'data' => $data,
            'title' => $title,
            'categories' => ['Background', 'Pattern', 'Sticker', 'Solid', 'Gradient'],
            'headerOptions' => [
                [
                    "type" => "modal",
                    "title" => "Create",
                    "href" => "manage.category",
                ]
            ],
        ]);
    }
}
