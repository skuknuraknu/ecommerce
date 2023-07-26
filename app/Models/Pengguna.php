<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Pengguna extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = "tb_users";
    protected $fillable = ['name', 'email', 'password', 'email_verified_at', 'IP', 'is_active'];
    protected $hidden = [ 'password', 'remember_token' ];
    protected $casts = [ 'email_verified_at' => 'datetime', 'password' => 'hashed' ];
}
