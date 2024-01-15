<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyEmailRequest;
use App\Models\Company_email;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyEmailController extends Controller
{
    public function store($email, $user_id)
    {
        $newEmail = new Company_email();

        $newEmail->user_id = $user_id;
        $newEmail->email = $email;

        $newEmail->save();

        return response()->json(201);
    }

    public function getEmails($user_id) :JsonResponse {
        $emails = Company_email::where('user_id', $user_id)->get();

        if($emails->isEmpty()){
            return response()->json([
                'alert' => 'No emails associate to this company'
            ], 404);
        } else {
            return response()->json([
                'emails' => $emails
            ], 200);
        }
    }

    public function destroy(Company_email $company_email) {

        $company_email->delete();

        return response()->json(204);
    }
}
