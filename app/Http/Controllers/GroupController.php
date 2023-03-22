<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Institution;
use App\Models\Group;
use App\Http\Resources\GroupResource;

class GroupController extends Controller
{
    public function create()
    {
    	$institutions = Institution::all();

    	return inertia('Explore/Groups/Create', compact('institutions'));
    }

    public function store(Request $request)
    {
    	$request->validate([
            'name' => 'required',
            'username' => 'required|alpha_dash',
            'institution_id' => 'required',
            'description' => 'required',
        ]);

        $group = Group::create([
            'name' => $request->name,
            'username' => $request->username,
            'institution_id' => $request->institution_id,
            'description' => $request->description,
            'owner_id' => auth()->user()->id
        ]);

        $group->members()->attach($request->user());

        return to_route('group.show', $group->uuid);
    }

    public function edit($uuid)
    {
        $group = new GroupResource(Group::where('uuid', $uuid)->first());

        $institutions = Institution::all();

        return inertia('Explore/Groups/Edit', compact('group', 'institutions')); 
    }

    public function updateAvatar(Request $request, $uuid)
    {
        $group = Group::where('uuid', $uuid)->first();

        $request->validate([
            'avatar' => 'nullable',
        ]);
        
        $group->clearMediaCollection('avatar');

        $group->addMedia($request->avatar)->toMediaCollection('avatar');

        return back();
    }

    public function createPost(Request $request)
    {
        $data = $request->validate([
            'title'=> 'required',
            'image'=> 'nullable|image',
            'group_id'=> 'required',
        ]);

        $post = auth()->user()->posts()->create([
            'title'=> $data['title'],
            'group_id' => $data['group_id']
        ]);
        
        if ($request->image) {
            $post->addMedia($request->image)->toMediaCollection('post-image');
        }

        return redirect()->back();
    }
}
