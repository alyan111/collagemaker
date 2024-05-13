<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TemplateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'uni' => $this->uni,
            'title' => $this->title,
            // 'images' => TemplateImageResource::collection($this->whenLoaded('images')),
            'images' => TemplateImageResource::collection($this->images),
        ];
    }
}
