<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request) :JsonResponse {
        $credentials = $request->only('company_nit', 'password');

        if(Auth::attempt($credentials)){
            $token = Auth::user()->createToken('auth_token')->plainTextToken;

            $data = [
                'access_token' => $token
            ];

            return response()->json([
                'auth_data' => $data,
            ], 200);
        }

        return response()->json(['error' => 'Credentials incorrect'], 401);
    }

    public function logout() :JsonResponse {
        $user = Auth::user();

        if($user) {
            $user->tokens()->delete();
            return response()->json(['message' => 'Logout succesfully'], 200);
        } else{
            return response()->json(['error' => 'no user Auth', 401]);
        }
    }
}
