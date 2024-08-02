<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SingleImageDataController;
use App\Http\Controllers\TemplateController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/templates', [TemplateController::class, 'index'])->name('view.all.templates');

    Route::get('/templates/new', [TemplateController::class, 'create'])->name('create.new.template.view');

    Route::get('/templates/{uni}', [TemplateController::class, 'edit'])->name('view.edit.template');

    Route::get('/assets/create', [SingleImageDataController::class, 'assetsCreate'])->name('assets.create.view');

    Route::get('/assets', [SingleImageDataController::class, 'index'])->name('view.all.assets');

    Route::get('/categories', [CategoryController::class, 'view'])->name('categories.view');

});

require __DIR__ . '/auth.php';