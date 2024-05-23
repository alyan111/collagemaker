<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Template extends Model
{
    use HasFactory;

    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
        'uni',
        'title',
        'white_image',
        'width',
        'height',
        'tags',
        'category_id',
        'thumbnail',
        'user_id',
    ];

    public function images()
    {
        return $this->hasMany(TemplateImage::class, "template_id");
    }
}
