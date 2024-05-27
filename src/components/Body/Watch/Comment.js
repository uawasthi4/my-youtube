import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-sm my-2">
      <img
        className="h-12"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt="comment-user"
      />
      <div className="px-3">
        <p className="text-bold">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
