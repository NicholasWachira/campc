<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GroupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'uuid' => $this->uuid,
            'name'=> $this->name,
            'username'=> $this->username,
            'description'=> $this->description,
            'institution' => $this->institution->name,
        ];
    }
}
