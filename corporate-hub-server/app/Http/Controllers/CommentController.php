<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function store(Request $request) :JsonResponse {
        $comment = new Comment();
        
        $comment->autor = $request->autor;
        $comment->description = $request->description;
        $comment->user_id = $request->user_id;
        $comment->save();

        return response()->json([
            'comment' => $comment
        ], 201);
    }

    public function getUserComments(User $user) {
        return response()->json([
            'comments' => $user->comments
        ], 200);
    }
}
