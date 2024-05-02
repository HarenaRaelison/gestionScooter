<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Symfony\Contracts\Service\Attribute\Required;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $client = Client::all();
        return response()->json($client);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nomCli' => 'Required|string',
            'emailCli' => 'Required|string',
            'telCli' => 'Required|string',
            'adrsCli' => 'Required|string'
        ]);
        $client = Client::create($data);
        return response()->json($client,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
        $client = Client::findOrFail($id);
        return response()->json($client);
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
        $data = $request->validate([
            'nomCli' => 'string',
            'emailCli' => 'string',
            'telCli' => 'string',
            'adrsCli' => 'string'
        ]);
        $client = Client::findOrFail($id);
        $client -> update($data);
        return response()->json($client);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $client = Client::findOrFail($id);
        $client -> delete();
        return response()->json("deleted",204);

    }
    
}
