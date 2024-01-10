<?php

namespace App\Http\Controllers;

use App\Models\Legal_form;
use Illuminate\Http\Request;

class LegalFormsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getAll()
    {
        $allLegalForms = Legal_form::all();

        $data = [
            'legal_forms' => $allLegalForms
        ];

        return response()->json([
            "data" => $data
        ], 200);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Legal_form $legal_forms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Legal_form $legal_forms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Legal_form $legal_forms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Legal_form $legal_forms)
    {
        //
    }
}
