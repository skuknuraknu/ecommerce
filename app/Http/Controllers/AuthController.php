<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller {
    public function index_login(){
        return Inertia::render('Auth/Login');
    }
    public function index_register(){
        return Inertia::render('Auth/Register');
    }
}
