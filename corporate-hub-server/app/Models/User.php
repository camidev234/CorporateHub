<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'company_name',
        'company_nit',
        'address',
        'description',
        'logo',
        'principal_activity',
        'password'
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
        'password' => 'hashed',
    ];

    public function country():BelongsTo {
        return $this->belongsTo(Country::class);
    }

    public function legal_form() :BelongsTo {
        return $this->belongsTo(Legal_form::class);
    }

    public function comments() :HasMany {
        return $this->hasMany(Comment::class);
    }

    public function emails() :HasMany {
        return $this->hasMany(Company_email::class);
    }

    public function phones() :HasMany {
        return $this->hasMany(Company_phone::class);
    }
}
