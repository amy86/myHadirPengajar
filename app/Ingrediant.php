<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingrediant extends Model
{
    //
    public $timestamps = false;

    protected $table = 'ingrediants';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $fillable = ['recipe_id', 'title'];
}
