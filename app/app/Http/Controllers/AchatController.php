<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Achat;
use App\Models\Client;
use App\Models\Scooter;

class AchatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $achats = Achat::with(['client:id,nomCli', 'scooter:id,nomScooter,prixScooter,couleurScooter'])->get();
        return response()->json($achats);

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
            "scooters_id" => "required|integer",
            "client_id" => "required|integer",
            "qteAchat" => "required|integer",
        ]);

        $scooter = Scooter::find($data['scooters_id']);
        $scooter->qteScooter -= $data['qteAchat'];
        $scooter->save();

        if ($scooter->qteScooter <= 0) {
            $scooter->delete();
            return response()->json("Scooter deleted due to zero Achat.", 202);
        }

        $achat = Achat::create($data);
        return response()->json($achat, 200);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
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
