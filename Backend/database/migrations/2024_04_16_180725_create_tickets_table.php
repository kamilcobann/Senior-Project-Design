<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->foreignIdFor(\App\Models\User::class,'by_user_id')->constrained('users')->onDelete('cascade');
            $table->foreignIdFor(\App\Models\KanbanList::class,'by_kanban_list_id')->constrained('kanban_lists')->onDelete('cascade');
            $table->dateTime('in_progress_started_at')->nullable();
            $table->dateTime('archived_at')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
