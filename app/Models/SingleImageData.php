<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SingleImageData extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'type',
        'thumbnail',
        'category_id',
        'user_id',
    ];
}
