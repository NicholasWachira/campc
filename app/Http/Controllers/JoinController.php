<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;

class JoinController extends Controller
{
    public function store(Group $group, Request $request)
    {
    	return $group->members()->toggle($request->user());
    }
}
