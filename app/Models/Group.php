<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Group extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

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

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function members()
    {
    	return $this->belongsToMany(User::class);
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->fit(Manipulations::FIT_CROP, 300, 300)
              ->queued();
    }
}
