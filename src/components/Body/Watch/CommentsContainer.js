import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Utkarsh Awasthi",
      text: "This is a comment!",
      replies: [
        {
          name: "Utkarsh Awasthi",
          text: "This is a comment!",
          replies: [
            {
              name: "Utkarsh Awasthi",
              text: "This is a comment!",
              replies: [
                {
                  name: "Utkarsh Awasthi",
                  text: "This is a comment!",
                  replies: [
                    {
                      name: "Utkarsh Awasthi",
                      text: "This is a comment!",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Utkarsh Awasthi",
      text: "This is a comment!",
      replies: [],
    },
    {
      name: "Utkarsh Awasthi",
      text: "This is a comment!",
      replies: [
        {
          name: "Utkarsh Awasthi",
          text: "This is a comment!",
          replies: [
            {
              name: "Utkarsh Awasthi",
              text: "This is a comment!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Utkarsh Awasthi",
      text: "This is a comment!",
      replies: [
        {
          name: "Utkarsh Awasthi",
          text: "This is a comment!",
          replies: [],
        },
      ],
    },
    {
      name: "Utkarsh Awasthi",
      text: "This is a comment!",
      replies: [
        {
          name: "Utkarsh Awasthi",
          text: "This is a comment!",
          replies: [],
        },
      ],
    },
    {
      name: "Utkarsh Awasthi",
      text: "This is a comment!",
      replies: [],
    },
  ];
  return (
    <div className="pt-5 px-5">
      <h1 className="text-2xl font-bold mb-2">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
