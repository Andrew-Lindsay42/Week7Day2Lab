import React, {useState} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const CommentBox = () => {

    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Ben Nevis",
            text: "How did I get here? I dont even like this."
          },
          {
            id: 2,
            author: "Clark Johnstone",
            text: "I like these songs"
          }
    ])

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now()
        const updatedComments = [...comments, submittedComment]
        setComments(updatedComments)
    }

    return (
        <>
        <h2>This is the comment box</h2>
        <CommentList comments={comments}/>
        <CommentForm onCommentSubmit={comment => addComment(comment)}/>
        
        
        </>
    )
}

export default CommentBox;