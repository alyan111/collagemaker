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
        "template_id",
    ];

    public function template()
    {
        return $this->belongsTo(Template::class);
    }
}
