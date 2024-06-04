<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TemplateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $templateImages = TemplateImageResource::collection($this->images);
        return [
            'uni' => $this->uni,
            'title' => $this->title,
            'category' => isset($this->category->name) ? $this->category->name : null,
            'height' => $this->height,
            'width' => $this->width,
            'thumbnail' => asset(Storage::url($this->thumbnail)),
            'whiteImage' => asset(Storage::url($this->white_image)),
            // 'images' => TemplateImageResource::collection($this->whenLoaded('images')),
            'images' => $templateImages,
        ];
    }
}

