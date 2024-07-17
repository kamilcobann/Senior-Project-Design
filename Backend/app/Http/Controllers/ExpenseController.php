<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ExpenseController extends Controller
{
    public function getAllExpenses(){
        try {
            $expenses = Expense::all();
            return response()->json([
                'status' => true,
                'message'=> 'Expenses are retrieved successfully',
                'expenses' => $expenses
            ],200);
        }catch (\Throwable $th){
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ],500);
        }
    }

    public function getExpense($id){
        try {
            if (!$expense = Expense::find($id)){
                return response()->json([
                    'status' => false,
                    'message' => 'Expense not found'
                ],404);
            }
            return response()->json([
                'status' => true,
                'message'=> 'Expense is retrieved successfully',
                'expense' => $expense
            ],200);
        }catch (\Throwable $th){
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ],500);
        }
    }

    public function createExpense(Request $request){
        try {
            if (!$expense = Budget::find($request->budget_id)->expenses()->create(
                $request->validate([
                    "title" => "string|required|max:255",
                    "description" => "string|required|max:255",
                    "amount" => "numeric|required",
                ])
            )){
                return response()->json([
                    "status" => false,
                    "message" => "Expense not added"
                ],500);
            }
            $budget = Budget::whereId($request->budget_id)->first();
            $budget->current_budget -= $expense->amount;
            $budget->save();
            return response()->json([
                "status" => true,
                "message" => "Expense added successfully",
                "expense" => $expense
            ]);
        }catch (\Throwable $th){
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ],500);
        }
    }

    public function updateExpense(Request $request, $id){
        try{
            $expense = Expense::with(['budget_type'])->whereId($id)->first();
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

            $expense->title = $request->get("title") == "" ? $expense->title: $request->get("title");
            $expense->description = $request->get("description") == "" ? $expense->description : $request->get("description");
            $expense->amount = $request->get("amount")==0 ? $expense->amount: $request->get("amount");

            $expense->save();
            return response()->json([
                "status"=>true,
                "message"=>"Budget updated successfully",
                "expense"=>$expense
            ],200);
        }catch (\Throwable $th){
            return response()->json([
                "status"=>false,
                "message"=>$th->getMessage()
            ],400);
        }
    }
}
