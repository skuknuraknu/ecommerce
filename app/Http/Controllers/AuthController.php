<?php

namespace App\Http\Controllers;

use App\Models\Pengguna;
use Carbon\Carbon;
use App\Mail\SendRegisterToken;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AuthController extends Controller {
    public function index_login(){
        return Inertia::render('Auth/Login');
    } public function index_register(){
        return Inertia::render('Auth/Register');
    }
    /* Function for post request begin here */
    public function post_login(){

    } public function post_register(Request $r){
        $validated = $r->validate([
            'email' => 'required|unique:tb_user|max:255',
            'password' => 'required',
        ]);
        try {
           // $pengguna = Pengguna::create($validated);
           $mail_data = [ "token" => rand(1000, 9999) ];
           DB::table('tb_verify_email')->insert(['email' => $r->email, 'token' => $mail_data['token'], 'expired_at' =>  Carbon::now()->addMinutes(60)]);
           // $waktu_sekarang = Carbon::now()->format('H:i:s');
           Mail::to($r->email)->send(new SendRegisterToken($mail_data));
           redirect('/register')->with('flash', 'Register Successfully! Please login....');
        } catch ( Exception $e ) {
            redirect('/register')->with("error", $e->getMessage());
        }
    }
}
