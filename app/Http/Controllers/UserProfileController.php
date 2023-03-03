<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserPostResource;

class UserProfileController extends Controller
{
    public function index($username)
    {
    	$user = new UserPostResource(User::where('username', $username)->first());

        $follows = (auth()->user()) ? auth()->user()->following->contains($user->id) : false;

    	return inertia('User-Profile/Index', compact('user', 'follows'));
    }

    public function edit($username)
    {
    	$user = new UserPostResource(User::where('username', $username)->first());

    	return inertia('User-Profile/Edit', compact('user'));
    }

    public function update(Request $request, $username)
    {
        $user = User::where('username', $username)->first();

        $validated = $request->validate([
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
        ]);

        $user->update([
            'name'=> $validated['name'],
            'username'=> $validated['username'],
            'email'=> $validated['email'],
        ]);

        $user = new UserPostResource($user);

        return redirect()->back();
    }

    public function updateAvatar(Request $request, $username)
    {
        $user = User::where('username', $username)->first();

        $request->validate([
            'avatar' => 'nullable',
        ]);
        
        $user->clearMediaCollection('avatar');

        $user->addMedia($request->avatar)->toMediaCollection('avatar');
    }
}
