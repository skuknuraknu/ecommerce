<?php

namespace App\Http\Controllers;

use App\Models\Pengguna;
use Carbon\Carbon;
use App\Mail\SendRegisterToken;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    } public function index_verify(){
        if(Auth::user()->is_active == 1){
            return redirect('/dashboard');
        }
        return Inertia::render('Auth/Verify');
    }
    /* Function for post request begin here */
    public function post_login(Request $r){
        $validated = $r->validate([
            'email' => 'required|max:255',
            'password' => 'required|max:255',
        ]);
        try{ 
            if(Auth::attempt($validated)){
                redirect('/dashboard')->with("flash", "ssuccess login");
            }
            redirect('/login')->with("flash", "not ssuccess login");
        } catch (Exception $e) {
            redirect('/login')->with("error", $e->getMessage());
        }
    } public function post_register(Request $r){
        $validated = $r->validate([
            'email' => 'required|unique:tb_user|max:255',
            'password' => 'required',
        ]);
        try {
           $pengguna = Pengguna::create($validated);
           $mail_data = [ "token" => rand(1000, 9999) ];
           DB::table('tb_verify_email')->insert(['email' => $r->email, 'token' => $mail_data['token'], 'expired_at' =>  Carbon::now()->addMinutes(60)]);
           Mail::to($r->email)->send(new SendRegisterToken($mail_data));
           redirect('/register')->with('flash', 'Register Successfully! Please login....');
        } catch ( Exception $e ) {
            redirect('/register')->with("error", $e->getMessage());
        }
    } public function post_verify(Request $r) {
        $user = auth()->user();
        $waktu_sekarang = Carbon::now()->format('H:i:s');
        $r->validate([ "token" => "required|max:4"]);
        $user_token_raw = DB::table('tb_verify_email')->where([ 'email'=> $user->email]);
        $user_token = $user_token_raw->first();
        if ( $user_token->token == $r->token && $waktu_sekarang < $user_token->expired_at ) {
            $user_token_raw->delete();
            User::where([ "email"=> $user->email])->update([ "is_active"=> 1 ]);
            return redirect('/dashboard')->with('flash', 'Success!');
        }
        return redirect('/verify')->with('error', 'Token is invalid!');
    } public function post_logout() {
        Auth::logout();
        return redirect('/login');
    }
}
