<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\CommentResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'uuid' => $this->uuid,
            'user' => new UserResource($this->user),
            'comments' => CommentResource::collection($this->comments),
            'comments_count' => $this->comments->count(),
            'image' => $this->getFirstMediaUrl('post-image'),
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
