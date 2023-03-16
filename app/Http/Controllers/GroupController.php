<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Institution;
use App\Models\Group;

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

        return inertia('Explore/Groups/Index');
    }
}
