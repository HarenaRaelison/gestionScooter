<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/achat', function(Request $request) {
    return 'Bonjour';
});