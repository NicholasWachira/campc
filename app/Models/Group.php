<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Group extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'username', 'uuid', 'owner_id', 'institution_id', 'description'];

    protected static function boot()
    {
        parent::boot();
 
        static::creating(function ($model) {
            $model->uuid = Str::uuid();
        });
    }

    public function institution()
    {
    	return $this->belongsTo(Institution::class, 'institution_id');
    }

    public function user()
    {
    	return $this->belongsTo(User::class, 'owner_id');
    }

    public function members()
    {
    	return $this->hasMany(Profile::class);
    }
}
