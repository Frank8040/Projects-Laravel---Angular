<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeamPostRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'tournament_id' => 'required',
            'school_id' => 'required',
            'cycle_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'type' => 'required',
            'color' => 'required',
            'status' => 'required',
        ];
    }
}
