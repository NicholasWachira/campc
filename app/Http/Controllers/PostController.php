<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Resources\PostResource;
use App\Http\Requests\PostStoreRequest;

class PostController extends Controller
{
    public function store(PostStoreRequest $request)
    {
    	$post = auth()->user()->posts()->create($request->validated());
    	
    	if ($request->image) {
    		$post->addMedia($request->image)->toMediaCollection('post-image');
    	}

    	return redirect()->back();
    }

    public function show($uuid)
    {
        $post = new PostResource(Post::where('uuid', $uuid)->first());

    	return inertia('Post/Show', compact('post'));
    }

    public function edit($uuid)
    {
        $post = new PostResource(Post::where('uuid', $uuid)->first());

        return inertia('Post/Edit' ,compact('post'));
    }

    public function update(PostStoreRequest $request, $uuid)
    {
        $post = Post::where('uuid', $uuid)->first();

        $post->update([
            'title' => $request->title 
        ]);

        return back();
    }

    public function delete($uuid)
    {
        $post = Post::where('uuid', $uuid)->first();

        $post->clearMediaCollection('post-image');

        $post->delete();

        return to_route('home');
    }
}
