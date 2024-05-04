<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Scooter;



class ScooterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $scooter = Scooter::all();
        return response()->json($scooter);
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
        $data = $request->validate([
            'nomScooter' => 'Required|string',
            'prixScooter' => "Required|integer",
            'qteScooter' => 'Required|integer',
            'couleurScooter' => 'Required|string',
            'cateScooter' => 'Required|string'
        ]);
        $scooter = Scooter::create($data);
        return response()->json($scooter);


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
