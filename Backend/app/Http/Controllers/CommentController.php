<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function createComment(Request $request, $ticketId)
    {
        try {
            $comment = $request->user()->createdComments()->create(
                $request->validate([
                    "content" => 'string|required',
                    "by_ticket_id" => $ticketId
                ])
            );

            return response()->json([
                "status" => true,
                "message" => "Comment created.",
                "comment" => $comment
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ], 400);
        }
    }


    public function getAllComments()
    {
        try {
            $comments = Comment::with(['owner','ticket'])->get();
            return response()->json([
                "status" => true,
                "message" => "All comments are successfully retrieved.",
                "comments" => $comments
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ], 400);
        }
    }

    public function getAllCommentsOfTicket($ticketId)
    {
        try {
            $comments = Comment::where('by_ticket_id', $ticketId)->with(['ticket','owner'])->get();
            return response()->json([
                "status" => true,
                "message" => "Comments retrieved.",
                "comments" => $comments
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 400);
        }
    }

    public function getAllCommentsOfUser(Request $request)
    {
        try {
            $comments = Comment::where('by_user_id', $request->user()->id)->with(['ticket','owner'])->get();

            return response()->json([
                "status" => true,
                "message" => "Comments are successfully retrieved.",
                "comments" => $comments
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 400);
        }
    }

    public function getCommentById($commentId)
    {
        try {
            $comment = Comment::whereId($commentId)->with(['ticket','owner'])->first();

            return response()->json([
                "status" => true,
                "message" => "Comment are successfully retrieved.",
                "comment" => $comment
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 400);
        }
    }

    public function updateComment(Request $request,$commentId)
    {
        try {
            $comment = Comment::whereId($commentId)->with(['members','kanbans.kanbanLists'])->first();
            $validator = Validator::make($request->all(), [
                "content" => "string|required"
            ]);

            if($validator->fails()){
                $errors = $validator->errors();
                return response()->json([
                    "status"=>false,
                    "message"=>$errors,
                ],400);
            }

            $comment->content = $request->content;
            $comment->save();

            return response()->json([
                "status" => true,
                "message" => "Comment updated.",
                "comment" => $comment
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ], 400);
        }

    }

    public function deleteCommentById($commentId)
    {
        try {
            if (!$comment = Comment::find($commentId)) {
                return response()->json([
                    "status" => false,
                    "message" => "Comment with id: " . $commentId . " not found."
                ], 404);
            }

            $comment->delete();
            return response()->json([
                "status" => true,
                "message" => "Comment deleted."
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage()
            ], 400);
        }
    }
}
