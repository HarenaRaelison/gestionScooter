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
            'nomCli' => 'required|string',
            'emailCli' => 'required|string',
            'telCli' => 'required|string',
            'adrsCli' => 'required|string'
        ]);
    
        // Récupérer tous les clients existants
        $allClients = Client::all();
    
        // Vérifier si l'e-mail du nouveau client est déjà présent dans la base de données
        foreach ($allClients as $client) {
            if ($client->emailCli === $data['emailCli']) {
                // L'e-mail existe déjà, retourner une réponse 400 (Bad Request)
                return response()->json(['error' => 'L\'adresse e-mail existe déjà dans notre base de données.'], 400);
            }
        }
    
        // Si l'e-mail n'existe pas déjà, créer un nouveau client
        $newClient = Client::create($data);
    
        // Retourner une réponse avec le client créé
        return response()->json(['message' => 'Client créé avec succès', 'client' => $newClient], 201);
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
