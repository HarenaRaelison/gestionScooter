<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scooter extends Model
{
    use HasFactory;
    protected $fillable = ['nomScooter','prixScooter','qteScooter','couleurScooter','cateScooter'] ; 
    public function scooter(){
        return $this->belongsTo(Scooter::class);
    }
}
