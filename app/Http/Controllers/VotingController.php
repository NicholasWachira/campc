<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use App\Notifications\UserUpvoteNotification;
use App\Events\Post\PostWasUpvoted;
// use App\Events\TestBroadcast;

class VotingController extends Controller
{
    public function upvotePost(Request $request, $uuid)
    {
    	$post = Post::where('uuid', $uuid)->first();

        $user = auth()->user();

    	// if ($user->hasVoted($post)) {
    	// 	$user->cancelVote($post);

    	// 	return;
    	// }
    	// else {

	    // 	$user->upvote($post);

	    // 	if ($user->id === $post->user_id) {
	    // 		return;
	    // 	}
	    // 	else {
	    // 		return $post->user->notify(new UserUpvoteNotification($request->user(), $post));
	    // 	}
    	// }

        broadcast(new PostWasUpvoted($user, $post));
    }
}
