import React, { useState } from "react";
import "./style.css"


function CommentSection() {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [activeCommentId, setActiveCommentId] = useState(null);

    function handleCommentSubmit(event) {
        event.preventDefault();
        if (!commentText) return;

        if (activeCommentId) {
            setComments((prevComments) =>
                prevComments.map((comment) =>
                    comment.id === activeCommentId
                        ? { ...comment, replies: [...comment.replies, { text: commentText }] }
                        : comment
                )
            );
            setActiveCommentId(null);
        } else {
            setComments((prevComments) => [
                ...prevComments,
                { id: Date.now(), text: commentText, replies: [] },
            ]);
        }

        setCommentText("");
    }

    return (
        <div className="comment-wrapper">
            <div id="comments">
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <div class="comment-heading">
                            <img src={require("../images/pfp.png")} alt="test" class="pfp" />
                            <div class="comment-info">
                                <a href=" " class="comment-author">Current_User</a>
                            </div>

                        </div>
                        <p>{comment.text}</p>
                        <div class="comment-voting">
                            <p class="m-0">
                                0 points &bull; Just Now
                            </p>
                            <button type="button" className='button'>
                                <span aria-hidden="true">&#9650;</span>
                                <span class="sr-only">Like</span>
                            </button>
                            <button type="button" className='button'>Flag</button>
                        </div>
                        <div className="replies">
                            {comment.replies.map((reply, index) => (

                                <div key={index}>
                                    <p>{reply.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="comment-form">
                <form onSubmit={handleCommentSubmit}>
                    <label htmlFor="comment">Reply:</label>
                    <br />
                    <textarea
                        id="comment"
                        value={commentText}
                        onChange={(event) => setCommentText(event.target.value)}
                    />
                    <br />
                    <button type="submit" className="submit-reply">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CommentSection;