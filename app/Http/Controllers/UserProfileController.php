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

    	return inertia('User-Profile/Index', compact('user'));
    }

    public function edit($username)
    {
    	$user = new UserPostResource(User::where('username', $username)->first());

    	return inertia('User-Profile/Edit', compact('user'));
    }

    public function update(Request $request, $username)
    {
        dd($request->avatar);

        $validated = $request->validate([
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
            'avatar' => 'nullable',
        ]);

        $user = User::where('username', $username)->first();

        $user->update([
            'name'=> $validated['name'],
            'username'=> $validated['username'],
            'email'=> $validated['email'],
        ]);

        if ($user->hasMedia()) {
            $user->clearMediaCollection();
        }

        $user->addMedia($request->avatar)->toMediaCollection('avatar');

        $user = new UserPostResource($user);

        return inertia('User-Profile/Edit', compact('user'));
    }
}
