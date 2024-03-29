<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use LaravelInteraction\Vote\Concerns\Voteable;

class Post extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, InteractsWithMedia, Voteable;

    protected $fillable = ['title', 'user_id', 'group_id','uuid'];

    public function user()
    {
    	return $this->belongsTo(User::class, 'user_id');
    }

    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id');
    }

    protected static function boot()
    {
        parent::boot();
 
        static::creating(function ($model) {
            $model->uuid = Str::uuid();
        });
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
