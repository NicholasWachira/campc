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
    	// $user = new UserResource(User::where('username', 'Kanjox')->first());

    	$user = new UserPostResource(User::where('username', $username)->first());

    	return inertia('User-Profile/Edit', compact('user'));
    }
}
