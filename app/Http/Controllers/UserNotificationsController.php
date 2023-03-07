<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserNotificationsResource;

class UserNotificationsController extends Controller
{
    public function index()
    {
    	$notifications =  UserNotificationsResource::collection(auth()->user()->unreadNotifications);

    	return inertia('User-Notifications/Index', compact('notifications'));
    }
}
