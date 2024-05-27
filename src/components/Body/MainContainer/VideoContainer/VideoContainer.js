import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../../utilities/constants";
import VideoCard from "./VideoCard/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState();

  useEffect(() => {
    getMostPopularVideos();
  }, []);

  const getMostPopularVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response.json();
    setPopularVideos(json.items);
  };

  return (
    popularVideos && (
      <div className="flex flex-wrap">
        {popularVideos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
