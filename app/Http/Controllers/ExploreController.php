<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Group;
use App\Http\Resources\UserResource;
use App\Http\Resources\GroupResource;
use App\Http\Resources\GroupPostsResource;

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

        $groups = GroupResource::collection(Group::take(4)->get());

    	$follows = (auth()->user()) ? auth()->user()->following->contains($ids->toArray()) : false;

    	return inertia('Explore/Users/Index', compact('users', 'follows', 'groups'));
    }

    public function searchGroups(Request $request)
    {
        $groups = GroupResource::collection(Group::all());

        return inertia('Explore/Groups/Index', compact('groups'));
    }

    public function showGroup(Request $request, $uuid)
    {
        $group = new GroupPostsResource(Group::where('uuid', $uuid)->first());

        return inertia('Explore/Groups/Show', compact('group'));
    }

    public function exploreGroups()
    {
        $groups = GroupResource::collection(Group::all());

        return inertia('Explore/Groups', compact('groups'));
    }
}
