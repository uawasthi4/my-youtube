import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../../utilities/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1280"
            height="720"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
