<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(UserRequest $request): JsonResponse
    {
        $newUser = new User();

        $newUser->company_name = $request->company_name;
        $newUser->company_nit = $request->company_nit;
        $newUser->address = $request->address;
        $newUser->country_id = $request->country_id;
        $newUser->description = $request->description;
        $newUser->principal_activity = $request->principal_activity;
        $newUser->legal_form_id = $request->legal_form_id;
        $newUser->password = Hash::make($request->password);

        $newUser->save();

        $data = [
            'user' => $newUser,
        ];

        return response()->json([
            'success' => 'user created succesfully',
            'data' => $data
        ], 201);
    }

    public function updateDescription(User $user, Request $request): JsonResponse
    {
        $user->description = $request->description;

        $user->save();

        return response()->json([
            'success' => 'user description updated successfully'
        ], 201);
    }

    public function searchCompany($searchWord): JsonResponse
    {

        $list = User::where('company_name', 'like', '%' . $searchWord . '%')
            ->orWhere('company_nit', 'like', '%' . $searchWord . '%')
            ->get();

        if ($list->isEmpty()) {
            return response()->json([
                'success' => 'no results found'
            ], 404);
        }

        return response()->json([
            'companies' => $list
        ], 200);
    }

    public function findUser(User $user): JsonResponse
    {

        $data = [
            'user' => [
                'id' => $user->id,
                'company_name' => $user->company_name,
                'company_nit' => $user->company_nit,
                'address' => $user->address,
                'principal_activity' => $user->principal_activity,
                'description' => $user->description,
                'country' => [
                    'country_name' => $user->country->country_name,
                ],
                'legal_form' => [
                    'legal_form' => $user->legal_form->legal_form
                ],
                'score' => $user->score
            ]
            ];

        return response()->json([
            'userFind' => $data
        ]);
    }
}
