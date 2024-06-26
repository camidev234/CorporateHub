<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CompanyEmailController;
use App\Http\Controllers\CompanyPhoneController;
use App\Http\Controllers\CountriesController;
use App\Http\Controllers\LegalFormsController;
use App\Http\Controllers\UserController;
use App\Models\Company_phone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/corporate-hub/register', [UserController::class, 'store']);
Route::get('/corporate-hub/get-countries', [CountriesController::class, 'getAllCountries']);
Route::get('/corporate-hub/get-legal-forms', [LegalFormsController::class, 'getAll']);
Route::post('/corporate-hub/save-email/{email}/{user_id}', [CompanyEmailController::class, 'store']);
Route::post('/corporate-hub/save-phone/{phone}/{user_id}', [CompanyPhoneController::class, 'store']);
Route::get('/search-company/{searchWord}', [UserController::class, 'searchCompany']);
Route::get('/corporate-hub/get-user/{user}', [UserController::class, 'findUser']);
Route::get('/getEmails/{user_id}', [CompanyEmailController::class, 'getEmails']);
Route::get('/getPhones/{user_id}', [CompanyPhoneController::class, 'getPhones']);
Route::post('/corporate-hub/save-comment', [CommentController::class, 'store']);
Route::get('/corporate-hub/get-user-comments/{user}', [CommentController::class, 'getUserComments']);

Route::post('/corporate-hub/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::delete('/deletePhone/{company_phone}', [CompanyPhoneController::class, 'destroy']);
    Route::delete('/deleteEmail/{company_email}', [CompanyEmailController::class, 'destroy']);
    Route::patch('/update-description/{user}', [UserController::class, 'updateDescription']);
});
