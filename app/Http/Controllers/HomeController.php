<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Resources\PostResource;

class HomeController extends Controller
{
    public function index()
    {
    	$posts = PostResource::collection(Post::latest()->get());

    	return inertia('Dashboard', compact('posts'));
    }
}
