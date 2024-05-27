import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="h-8"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt="user-icon"
      />
      <span className="font-bold pr-3">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
