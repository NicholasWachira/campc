<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\InstitutionResource;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'follows'=> (auth()->user()) ? $this->profile->followers->contains(auth()->user()->id) : false,
            'isVerified' => $this->is_verified,
            'institution' => new InstitutionResource($this->institution),
            'avatar' => $this->getFirstMediaUrl('avatar', 'thumb'),
        ];
    }
}
