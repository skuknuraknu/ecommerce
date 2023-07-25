<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller {
    // index
    public function __invoke() {
        return Inertia::render('Home');
    }
}
