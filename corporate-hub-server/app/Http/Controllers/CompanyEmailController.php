<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyEmailRequest;
use App\Models\Company_email;
use App\Models\User;
use Illuminate\Http\Request;

class CompanyEmailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store($email, $user_id)
    {
        $newEmail = new Company_email();

        $newEmail->user_id = $user_id;
        $newEmail->email = $email;

        $newEmail->save();

        return response()->json(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company_email $company_email)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company_email $company_email)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company_email $company_email)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company_email $company_email)
    {
        //
    }
}
