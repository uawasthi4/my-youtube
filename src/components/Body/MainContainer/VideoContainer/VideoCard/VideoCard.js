import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={info.snippet.thumbnails.medium.url}
        alt=""
      />
      <span className="font-bold">{info.snippet.title}</span>
      <div className="text-sm text-gray-600">{info.snippet.channelTitle}</div>
      <div>{info.statistics.viewCount} Views</div>
    </div>
  );
};

export const VideoCardWithBorder = (VideoCard) => {
  return (props) => {
    return (
      <div className="border border-black p-1 m-1">
        <VideoCard {...props} />
      </div>
    );
  };
};

export default VideoCard;
