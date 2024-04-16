<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ticket extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'description'
    ];

    /**
     * Get the user that owns the Ticket
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function attachedKanbanList(): BelongsTo
    {
        return $this->belongsTo(KanbanList::class, 'by_kanban_list_id');
    }

    public function assignedUsers(): HasMany
    {
        return $this->hasMany(User::class, 'by_user_id');
    }
}
