<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IntrestsController extends Controller
{
    public function index()
    {
    	return inertia('Auth/UserIntrests');
    }
}
