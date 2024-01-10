<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CountriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getAllCountries() :JsonResponse
    {
        $allCountries = Country::all();

        $data = [
            "countries" => $allCountries
        ];

        return response()->json([
            "data" => $data
        ], 200);

    }
}
