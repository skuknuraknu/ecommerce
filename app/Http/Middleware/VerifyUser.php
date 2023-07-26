<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class VerifyUser {
    public function handle(Request $request, Closure $next): Response {
        if(Auth::user()->is_active != 1){
            return redirect('/verify');
        }
        return $next($request);
    }
}
