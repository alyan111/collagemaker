<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TemplateImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $response = [
            'uni' => $this->uni,
            // 'image' => asset('storage/templates/' . $this->image),
            'image' => asset(Storage::url($this->image)),
            'width' => $this->width,
            'height' => $this->height,
            'x_axis' => $this->x_axis,
            'y_axis' => $this->y_axis,
            'rotation' => $this->rotation,
            'scale' => $this->scale,
            'isFrame' => $this->isFrame,
            $response['coordinates'] = $this->coordinates ? $this->coordinates : ['bottom' => "0", "top" => "0", "left" => "0", "right" => "0"];
        ];
        return $response;
    }
}
