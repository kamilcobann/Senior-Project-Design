<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
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
