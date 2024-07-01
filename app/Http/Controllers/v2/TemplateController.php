<?php

namespace App\Http\Controllers\v2;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TemplateResource;

class TemplateController extends Controller
{
    function getTemplatesFronASingleCategory(Request $request, $category_name)
    {
        return response()->json([
            'name' => $category_name,
            'templates' => TemplateResource::collection(Category::where('name', $category_name)
                ->get()[0]->templates()->paginate(12))->toArray($request)
        ]);
    }
    function getPaginatedTemplates(Request $request)
    {
        $response = [];
        foreach (Category::with(['templates' => function ($query) {
            $query->take(5);
        }
        ])->paginate(10) as $category)
            $response[] = [
                'name' => $category['name'],
                'templates' => TemplateResource::collection($category['templates'])->toArray($request)
            ];
        return response()->json(['templates' => $response]);
    }
}
