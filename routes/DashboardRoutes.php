<?php 
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\DashboardController as Dashboard;
use App\Http\Controllers\Dashboard\MenuController as Menu;
use App\Http\Controllers\Dashboard\RoleController as Role;


Route::get('/', Dashboard::class)->name('dashboard.index');

Route::get('/role', [Role::class, 'get_role'])->name('role.get');
Route::post('/role', [Role::class, 'post_role'])->name('role.post');
Route::post('/role/delete', [Role::class, 'destroy_role'])->name('role.destroy');

Route::get('/menu', [Menu::class, 'index'])->name('menu.get');
Route::post('/menu', [Menu::class, 'store'])->name('menu.post');
Route::post('/menuForm', [Menu::class, 'storeForm'])->name('menu.postForm');
Route::post('/menu/delete', [Menu::class, 'destroy'])->name('menu.destroy');
 ?>