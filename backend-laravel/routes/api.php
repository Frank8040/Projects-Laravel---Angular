<?php

use App\Http\Controllers\SchoolController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/schools', [SchoolController::class, 'index']);
Route::post('/schools', [SchoolController::class, 'store']);
Route::put('/schools/{school}', [SchoolController::class, 'update']);
Route::delete('/schools/{school}', [SchoolController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
