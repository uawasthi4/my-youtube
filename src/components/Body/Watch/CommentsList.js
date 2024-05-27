import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    // Don't use indexes as keys
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <div>Replies</div>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
