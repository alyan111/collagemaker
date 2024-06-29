<?php

use App\Http\Controllers\v2\TemplateController as V2TemplateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v2')->group(function () {

  Route::get('/templates', [V2TemplateController::class, 'getPaginatedTemplates'])->name("v2.get.paginated.template");

  Route::get('/templates/{category_name}', [V2TemplateController::class, 'getTemplatesFronASingleCategory'])->name("v2.get.all.template.for.a.category");

});
