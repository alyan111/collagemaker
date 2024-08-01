<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TemplateImageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $response = [
            'uni' => $this->uni,
            // 'image' => asset('storage/templates/' . $this->image),
            'image' => $this->isFrame == 1 ? "https://collagemaker.rosyappsstudio.com/temp.png" :  asset(Storage::url($this->image)),
            'width' => $this->width,
            'image_text' => $this->imageText,
            'height' => $this->height,
            'x_axis' => $this->x_axis,
            'y_axis' => $this->y_axis,
            'rotation' => $this->rotation,
            'scale' => $this->scale,
            'isFrame' => (int) $this->isFrame,
            'isText' => $this->isText,
            'isTop' => $this->isTop,
            'shapeType' => $this->shapeType,
            'coordinates' => $this->coordinates ? $this->coordinates : ['bottom' => "0", "top" => "0", "left" => "0", "right" => "0"],
        ];
        return $response;
    }
}
