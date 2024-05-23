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
        ];
        if ($this->coordinates) {
            $response['coordinates'] = $this->coordinates;
        }
        return $response;
    }
}
