<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\KanbanController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\KanbanListController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::controller(ProjectController::class)->middleware("auth")->group(function(){
    Route::get('projects','getAllProjects');
    Route::get('projects/{id}','getProjectById');
    Route::delete('projects/{id}', 'deleteProjectById');
    Route::post('projects', 'createProject');
    Route::get('/user/projects','getAllProjectsOfUser');
    Route::post('/projects/{id}/add-member', 'addMemberToProject');
    Route::post('/projects/{id}/remove-member', 'removeMemberFromProject');
    Route::put('/projects/{id}','updateProject');
});

Route::controller(KanbanController::class)->middleware("auth")->group(function(){
    Route::post('projects/{id}/kanbans','createKanban');
    Route::get('kanbans','getAllKanbans');
    Route::get('kanbans/{id}','getKanbanById');
    Route::get('user/kanbans','getAllKanbansOfUser');
    Route::get('projects/{id}/kanbans','getAllKanbansOfProject');
    Route::put('kanbans/{id}','updateKanban');
    Route::delete('kanbans/{id}','deleteKanban');
    Route::post('/kanbans/{id}/add-member', 'addMemberToKanban');
    Route::post('/kanbans/{id}/remove-member', 'removeMemberFromKanban');
});

Route::controller(KanbanListController::class)->middleware("auth")->group(function(){
    Route::post('/kanbans/{id}/kanban-list','createKanbanList');
    Route::get('/kanbans/{id}/kanban-list','getKanbanLists');
    Route::put('/kanbans/{kanbanId}/kanban-list/{kanbanListId}','updateKanbanList');
    Route::delete('/kanbans/{kanbanId}/kanban-list/{kanbanListId}','deleteKanbanList');
    Route::get('/kanbans/{kanbanId}/kanban-list/{kanbanListId}','getKanbanListById');
});
