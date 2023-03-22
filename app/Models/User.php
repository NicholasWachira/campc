<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Image\Manipulations;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\HasMedia;
use Laravel\Sanctum\HasApiTokens;
use LaravelInteraction\Vote\Concerns\Voter;
use Filament\Models\Contracts\FilamentUser;

class User extends Authenticatable implements HasMedia, FilamentUser
{
    use HasApiTokens, HasFactory, HasRoles, Notifiable, InteractsWithMedia, Voter;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'institution_id',
        'is_verified',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function boot()
    {
        parent::boot();

        static::created(function ($user){
            $user->profile()->create();

            $user->following()->toggle($user->profile);
        });
    }

    public function canAccessFilament(): bool
    {
        return $this->can('admin_access');
    }

    public function posts()
    {
        return $this->hasMany(Post::class)->latest();
    }

    public function institution()
    {
        return $this->belongsTo(Institution::class);
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->fit(Manipulations::FIT_CROP, 300, 300)
              ->queued();
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function following()
    {
        return $this->belongsToMany(Profile::class);
    }

    public function group()
    {
      return $this->hasMany(Group::class);
    }
}
