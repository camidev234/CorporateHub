<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'company_name' => 'required|max:55|string',
            'company_nit' => 'required|min:9|max:17|string|unique:users',
            'address' => 'required|max:45|string',
            'description' => 'required|max:900|string',
            'principal_activity' => 'required|max:90|string',
            'password' => 'required|min:8|max:130'
        ];
    }
}
