<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SingleImageDataController;
use App\Http\Controllers\TemplateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Redis;

Route::get('/user', function (Request $request) {
    try {
        Redis::set('test_key', 'Hello, Redis from Laravel!');
        $value = Redis::get('test_key');
        echo "Retrieved value from Redis: $value <br>";
        Redis::del('test_key');
        echo "Test key deleted successfully.";
    } catch (\Exception $e) {
        echo "Error: " . $e->getMessage();
    }
    return "";
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/assets/{type}', [SingleImageDataController::class, 'getSingleImageContent'])->name("serve.assets");

Route::post('/save', [SingleImageDataController::class, 'testSave'])->name("test.save");

Route::post('/login', [ProfileController::class, 'login'])->name("api.login");

Route::get('/file', [SingleImageDataController::class, 'downloadTest'])->name("download.test");

Route::middleware('auth:sanctum')->post('/templates', [TemplateController::class, 'store'])->name("save.template");

Route::middleware('auth:sanctum')->delete('/templates/{uni}', [TemplateController::class, 'delete'])->name("delete.template");

Route::post('/assets/create', [SingleImageDataController::class, 'store'])->name("save.single.asset");

Route::middleware('auth:sanctum')->put('/templates/image/{uni}', [TemplateController::class, 'updateImage'])->name("update.template.image");

Route::get('/templates/{uni}', [TemplateController::class, 'read'])->name("get.template");

Route::get('/templates', [TemplateController::class, 'readAll'])->name("get.all.template");

Route::get('/templates/update/frameCount', [TemplateController::class, 'updateFrameCount'])->name("get.all.template");

Route::post('/category', [CategoryController::class, 'manage'])->name("manage.category");

Route::patch('/category/status', [CategoryController::class, 'toggle'])->name("toggle.category");

require __DIR__ . '/auth.php';

require __DIR__ . '/v2.api.php';
