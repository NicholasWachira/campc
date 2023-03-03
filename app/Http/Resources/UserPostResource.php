<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserPostResource extends JsonResource
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
            'name' => $this->name,
            'username' => $this->username,
            'isVerified' => $this->is_verified,
            'institution' => $this->institution->name,
            'email' => $this->email,
            'followers' => $this->profile->followers->count(),
            'following' => $this->following->count(),
            'avatar' => $this->getFirstMediaUrl('avatar', 'thumb'),
            'posts' => PostResource::collection($this->posts),
        ];
    }
}
