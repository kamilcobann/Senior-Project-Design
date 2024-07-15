<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Budget extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'amount',
        "by_project_id"
    ];

    public function project():BelongsTo{
        return $this->belongsTo(Project::class, "by_project_id");
    }

}
