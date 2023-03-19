<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\PostResource;

class GroupPostsResource extends JsonResource
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
            'id'=> $this->id,
            'uuid' => $this->uuid,
            'name'=> $this->name,
            'owner_id'=> $this->owner_id,
            'username'=> $this->username,
            'member' => (auth()->user()) ? $this->members->contains(auth()->user()->id) : false,
            'members_count'=> $this->members->count(),
            'description'=> $this->description,
            'institution_id'=> $this->institution->id,
            'institution' => $this->institution->name,
            'avatar' => $this->getFirstMediaUrl('avatar', 'thumb'),
            'posts' => PostResource::collection($this->posts),
        ];
    }
}
