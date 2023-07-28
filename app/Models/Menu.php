<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model {
    use HasFactory;
    protected $table = "tb_menu";
    protected $fillable = ["menu_name", "route_name", "is_nested", "parent_name"];
}
