<?php

use App\Http\Controllers\CompanyEmailController;
use App\Http\Controllers\CompanyPhoneController;
use App\Http\Controllers\CountriesController;
use App\Http\Controllers\LegalFormsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/corporate-hub/register', [UserController::class, 'store']);
Route::get('/corporate-hub/get-countries', [CountriesController::class, 'getAllCountries']);
Route::get('/corporate-hub/get-legal-forms', [LegalFormsController::class, 'getAll']);
Route::post('/corporate-hub/save-email/{user_id}', [CompanyEmailController::class, 'store']);
Route::post('/corporate-hub/save-phone/{user_id}', [CompanyPhoneController::class, 'store']);
