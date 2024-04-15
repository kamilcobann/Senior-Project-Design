<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KanbanList extends Model
{
    use HasFactory;

    protected $fillable = [
        "title"
    ];

    public function belongingKanban():BelongsTo{
        return $this->belongsTo(Kanban::class,'by_kanban_id');
    }
}
