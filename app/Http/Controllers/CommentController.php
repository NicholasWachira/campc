<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentPostRequest;
use App\Models\Comment;
use App\Models\Post;

class CommentController extends Controller
{
    public function store(CommentPostRequest $request, $uuid)
    {
    	$post = Post::where('uuid', $uuid)->first();

    	$comment = Comment::create([
    		'user_id' => auth()->user()->id,
    		'post_id' => $post->id,
    		'message' => $request->message
    	]);

    	if ($request->image) {
    		$comment->addMedia($request->image)->toMediaCollection('comment-image');
    	}

    	return redirect()->back();
    }
}
