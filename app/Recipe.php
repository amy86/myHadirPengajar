<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    //
    public $timestamps = false;

    protected $table = 'Recipes';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $fillable = ['title', 'imageUrl'];

    public function ingrediant()
    {
        return $this->hasMany(Ingrediant::class, 'recipe_id', 'id');
    }
}
