import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../../utilities/slices/chatSlice";
import {
  generateRandomNames,
  getRandomSentence,
} from "../../../utilities/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling - Replace with fetch
      const obj = {
        name: generateRandomNames(),
        message: getRandomSentence() + " 😁",
      };

      dispatch(addChat(obj));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLiveChat = (event) => {
    event.preventDefault();
    const obj = {
      name: "Utkarsh Awasthi",
      message: liveMessage + " 😁",
    };
    dispatch(addChat(obj));
    setLiveMessage("");
  };

  return (
    <form
      className="ml-2 p-2 border border-black h-[720px]"
      onSubmit={(e) => handleLiveChat(e)}
    >
      <div className="h-[660px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse mb-2">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <div className="w-full grid grid-flow-col">
        <input
          type="text"
          className="border border-black rounded-md px-2 py-1 col-span-9"
          placeholder="Enter your message!"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="rounded-lg px-2 mx-1 bg-slate-300 col-span-2">
          Send
        </button>
      </div>
    </form>
  );
};

export default LiveChat;
