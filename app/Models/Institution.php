<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'short_name'];

    public function users()
    {
    	return $this->hasMany(User::class);
    }
}
