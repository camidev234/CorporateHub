<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyPhoneRequest;
use App\Models\Company_phone;
use Illuminate\Http\Request;

class CompanyPhoneController extends Controller
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
    public function store($phone, $user_id)
    {
        $newPhone = new Company_phone();

        $newPhone->user_id = $user_id;
        $newPhone->phone = $phone;

        $newPhone->save();

        return response()->json(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company_phone $company_phone)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company_phone $company_phone)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company_phone $company_phone)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company_phone $company_phone)
    {
        //
    }
}
