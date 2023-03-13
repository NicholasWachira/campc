<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use App\Notifications\UserUpvoteNotification;

class VotingController extends Controller
{
    public function upvotePost(Request $request, $uuid)
    {
    	$post = Post::where('uuid', $uuid)->first();

    	$upvote =  auth()->user()->upvote($post);

    	return $post->user->notify(new UserUpvoteNotification($request->user(), $post));
    }
}
