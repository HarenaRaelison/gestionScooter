<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Client ; 
use App\Models\Scooter ; 
class Achat extends Model
{
    use HasFactory;
    protected $fillable = ["scooters_id","client_id","qteAchat"];
    public function client(){ 
        return $this->belongsTo(Client::class , 'client_id');
    }
    public function Scooter(){
        return $this->belongsTo(Scooter::class , 'scooters_id');
    }

}
