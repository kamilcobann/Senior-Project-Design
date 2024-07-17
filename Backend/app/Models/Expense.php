<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Expense extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'description',
        'amount',
        //'budget_id'
    ];

    public function budget_type(): BelongsTo{
        return $this->belongsTo(Budget::class, 'budget_id');
    }
}
