<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

Route::middleware(['guest'])->group( function () {
    Route::get('/', HomeController::class)->name('home');
    Route::get('/login', [AuthController::class, 'index_login'])->name('login.index');
    Route::post('/login', [AuthController::class, 'post_login'])->name('login.post');
    Route::get('/register', [AuthController::class, 'index_register'])->name('register.index');
    Route::post('/register', [AuthController::class, 'post_register'])->name('register.post');
});
Route::middleware(['auth'])->group( function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard.index');
});
