<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Resources\PostResource;

class HomeController extends Controller
{
    public function index()
    {
    	$user =  auth()->user()->following()->pluck('profiles.user_id');

    	$posts = PostResource::collection(Post::whereIn('user_id', $user)->latest()->get());

    	return inertia('Dashboard', compact('posts'));
    }

    public function users()
    {
    	return inertia('Auth/FollowUsers');
    }
}
