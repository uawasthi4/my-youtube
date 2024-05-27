import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarExpanded = useSelector((store) => store.app.isSidebarExpanded);

  return (
    isSidebarExpanded && (
      <div className="shadow-lg p-5 w-48">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/demo">
            <li>Demo</li>
          </Link>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold">You</h1>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Watch later</li>
          <li>Lik e videos</li>
        </ul>
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
