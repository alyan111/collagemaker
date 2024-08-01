<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateImage extends Model
{
    use HasFactory;

    protected $fillable = [
        "uni",
        "width",
        "height",
        "x_axis",
        "y_axis",
        "rotation",
        "scale",
        "image",
        "isFrame",
        "isText",
        "coordinates",
        "imageText",
        "isTop",
        "shapeType",
        "template_id",
    ];

    protected $casts = [
        'coordinates' => 'array',
    ];

    public function template()
    {
        return $this->belongsTo(Template::class);
    }
    public function getRouteKeyName()
    {
        return 'uni'; // Specify the column you want to use for route model binding
    }
}
