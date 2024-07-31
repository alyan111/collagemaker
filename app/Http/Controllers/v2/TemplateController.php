<?php

namespace App\Http\Controllers\v2;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TemplateResource;
use Illuminate\Support\Facades\Redis;

class TemplateController extends Controller
{
    function getTemplatesFronASingleCategory(Request $request, $category_name)
    {
        // $cacheKey = "templates_for_category_{$category_name}_page_{$request->page}";
        // $cachedResponse = Redis::get($cacheKey);
        // if ($cachedResponse)
        //     return response()->json(json_decode($cachedResponse, true));
        // $response = [
        //     'name' => $category_name,
        //     'templates' => TemplateResource::collection(Category::where('name', $category_name)
        //         ->get()[0]->templates()->paginate(12))->toArray($request)
        // ];
        // Redis::setex($cacheKey, 3600 * 24, json_encode($response)); // Cache for 1 day
        // return response()->json($response);

        $response = [
            'name' => $category_name,
            'templates' => TemplateResource::collection(Category::where('name', $category_name)
                ->get()[0]->templates()->paginate(12))->toArray($request)
        ];
        return response()->json($response);
    }

    function getPaginatedTemplates(Request $request)
    {
        // $cacheKey = "templates_with_categories_page_{$request->page}";
        // $cachedResponse = Redis::get($cacheKey);
        // if ($cachedResponse)
        //     return response()->json(["templates" => json_decode($cachedResponse, true)]);
        // $response = [];
        // foreach (Category::with(['templates' => function ($query) {
        //     $query->take(5);
        // }
        // ])->paginate(10) as $category)
        //     $response[] = [
        //         'name' => $category['name'],
        //         'templates' => TemplateResource::collection($category['templates'])->toArray($request)
        //     ];
        // Redis::setex($cacheKey, 3600 * 24, json_encode($response)); // Cache for 1 day
        // return response()->json(["templates" => $response]);

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
