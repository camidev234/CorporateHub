<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = $request->only('company_nit', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = Auth::user()->createToken('auth_token')->plainTextToken;

            $data = [
                'access_token' => $token,
                'user' => [
                    'id' => $user->id,
                    'company_name' => $user->company_name,
                    'company_nit' => $user->company_nit,
                    'address' => $user->address,
                    'principal_activity' => $user->principal_activity,
                    'description' => $user->description,
                    'country' => [
                        'id' => $user->country_id,
                        'country_name' => $user->country->country_name,
                    ],
                    'legal_form' => [
                        'id' => $user->legal_form_id,
                        'legal_form' => $user->legal_form->legal_form
                    ]
                ]
            ];

            return response()->json([
                'auth_data' => $data,
            ], 200);
        }

        return response()->json(['error' => 'Credentials incorrect'], 401);
    }

    public function logout(): JsonResponse
    {
        $user = Auth::user();

        if ($user) {
            $user->tokens()->delete();
            return response()->json(['message' => 'Logout succesfully'], 200);
        } else {
            return response()->json(['error' => 'no user Auth', 401]);
        }
    }
}
