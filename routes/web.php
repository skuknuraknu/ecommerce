<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\VerifyUser;

Route::prefix('')
    ->group(base_path('routes/AuthRoutes.php'));

Route::middleware(['auth', VerifyUser::class])->get('/verify', [AuthController::class, 'index_verify']);
Route::middleware('auth')->post('/verify', [AuthController::class, 'post_verify']);

Route::middleware(['auth', VerifyUser::class ])->group( function () {
    Route::prefix('dashboard')->group(base_path('routes/DashboardRoutes.php'));
    Route::post('/logout', [AuthController::class, 'post_logout'])->name('logout.post');
});
