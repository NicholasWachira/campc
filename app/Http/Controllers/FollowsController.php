<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Notifications\UserFollowNotification;
use App\Http\Resources\UserResource;

class FollowsController extends Controller
{
    public function store(User $user, Request $request)
    {
    	$user->notify(new UserFollowNotification($request->user()));

    	return auth()->user()->following()->toggle($user->profile);

    }
}
