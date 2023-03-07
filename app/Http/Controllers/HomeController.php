<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserNotificationsResource;

class HomeController extends Controller
{
    public function index()
    {

    	if (auth()->user()) {
    		$user =  auth()->user()->following()->pluck('profiles.user_id');

    		$posts = PostResource::collection(Post::whereIn('user_id', $user)->latest()->get());
    	}

    	else {
    		$posts = PostResource::collection(Post::latest()->get());	
    	}

    	return inertia('Dashboard', compact('posts'));
    }

    public function users(Request $request)
    {
    	$users = UserResource::collection(User::with('media')->get());

    	$follows = (auth()->user()) ? auth()->user()->following->contains($request->id) : false;

    	return inertia('Auth/FollowUsers', compact('users', 'follows'));
    }
}
