<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;

class ExploreController extends Controller
{
    public function searchUsers(Request $request)
    {
    	if (auth()->user()) {
    		$users = UserResource::collection(User::where('id', '!=', auth()->user()->id)->take(20)->get());	
    	}
    	else {
    		$users = UserResource::collection(User::take(20)->get());
    	}

    	$ids = $users->map(function($user) {
    		return $user->id;
    	});


    	$follows = (auth()->user()) ? auth()->user()->following->contains($ids->toArray()) : false;

    	return inertia('Explore/Users', compact('users', 'follows'));
    }
}
