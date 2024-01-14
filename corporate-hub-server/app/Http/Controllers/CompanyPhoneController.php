<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyPhoneRequest;
use App\Models\Company_phone;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyPhoneController extends Controller
{

    public function store($phone, $user_id)
    {
        $newPhone = new Company_phone();

        $newPhone->user_id = $user_id;
        $newPhone->phone = $phone;

        $newPhone->save();

        return response()->json(201);
    }

    public function getPhones($user_id) :JsonResponse {
        $phones = Company_phone::where('user_id', $user_id)->get();

        if($phones->isEmpty()){
            return response()->json([
                'alert' => 'No phones associate to this company'
            ], 404);
        } else {
            return response()->json([
                'phones' => $phones
            ], 200);
        }
    }
}
