<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserNotificationsResource extends JsonResource
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
            'name' => $this->data['name'],
            'username' => $this->data['username'],
            'avatar' => $this->data['avatar'],
            'message' => $this->data['message'],
            'isVerified' => $this->data['isVerified'],
            'count' => $this->count(),
        ];
    }
}
