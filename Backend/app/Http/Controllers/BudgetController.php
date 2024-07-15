<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BudgetController extends Controller
{
    public function getAllBudgets(){
        try{
            $budgets = Budget::with('project')->get();
            return response()->json([
                "status"=>true,
                "message"=>"Budgets are retrieved successfully",
                "budgets"=>$budgets,
            ], 200);
        }catch (\Throwable $th){
            return response()->json([
                "status"=>false,
                "message"=>$th->getMessage(),
            ], 400);
        }
    }


    public function createBudget(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                "title" => "string|required|max:255",
                "description" => "string|max:255",
                "by_project_id"=>"required|integer|exists:projects,id",
                "amount"=>"required|numeric"
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "status"=>false,
                    "message"=>$validator->errors(),
                ],400);
            }
            $project = Project::find($request->get("project_id"));

            $budget = Budget::create([
                "title"=>$request->get("title"),
                "description"=>$request->get("description"),
                "amount"=>$request->get("amount"),
                "by_project_id"=>$request->get("by_project_id"),
            ]);

            return response()->json([
                "status"=>true,
                "message"=>"Budget created successfully",
                "budget"=>$budget
            ],200);
        }catch (\Throwable $th){
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ], 400);
        }
    }

    public function updateBudget(Request $request, $id){
        try{
            $budget = Budget::with('project')->whereId($id)->first();
            $validator = Validator::make($request->all(), [
                "title" => "string|max:255",
                "description" => "string|max:255",
                "amount"=>"required|numeric"
            ]);
            if ($validator->fails()){
                return response()->json([
                    "status"=>false,
                    "message"=>$validator->errors()
                ],400);
            }

            $budget->title = $request->get("title") == "" ? $budget->title: $request->get("title");
            $budget->description = $request->get("description") == "" ? $budget->description : $request->get("description");
            $budget->amount = $request->get("amount")==0 ? $budget->amount: $request->get("amount");

            $budget->save();
            return response()->json([
                "status"=>true,
                "message"=>"Budget updated successfully",
                "budget"=>$budget
            ],200);
        }catch (\Throwable $th){
            return response()->json([
                "status"=>false,
                "message"=>$th->getMessage()
            ],400);
        }

    }

    public function deleteBudget($id){
        try{
            if (!$budget = Budget::find($id)){
                return response()->json([
                    "status"=>false,
                    "message"=>"Budget not found"
                ],404);
            }
            $budget->delete();

            return response()->json([
                "status" => true,
                "message" => "Ticket deleted"
            ], 200);

        }catch (\Throwable $th){
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ], 400);
        }
    }
}
