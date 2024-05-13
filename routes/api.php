<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SingleImageDataController;
use App\Http\Controllers\TemplateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/assets/{type}', [SingleImageDataController::class, 'index'])->name("serve.assets");

Route::post('/save', [SingleImageDataController::class, 'testSave'])->name("test.save");

Route::get('/file', [SingleImageDataController::class, 'downloadTest'])->name("download.test");

Route::post('/templates', [TemplateController::class, 'store'])->name("save.template");

Route::post('/assets/create', [SingleImageDataController::class, 'store'])->name("save.single.asset");

Route::get('/templates/{uni}', [TemplateController::class, 'read'])->name("get.template");

Route::post('/category', [CategoryController::class, 'manage'])->name("manage.category");

Route::patch('/category/status', [CategoryController::class, 'toggle'])->name("toggle.category");
