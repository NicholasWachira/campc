<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;

class VotingController extends Controller
{
    public function upvotePost($uuid)
    {
    	$post = Post::where('uuid', $uuid)->first();

    	return auth()->user()->upvote($post);
    }
}
