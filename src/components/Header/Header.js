import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../utilities/slices/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../../utilities/constants";
import { cacheResults } from "../../utilities/slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchResultsCache = useSelector((store) => store.search);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    //make an API call after every key press
    // As soon as difference b/w then is less than 200ms
    // Decline the api call
    const timer = setTimeout(() => {
      // If present in cache, setSuggestions from cache
      // Else make API call, then setSuggestions
      if (searchResultsCache[searchInput]) {
        setSearchSuggestions(searchResultsCache[searchInput]);
      } else {
        fetchAutoSuggestResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  /**
   *
   * key = i
   * - render the component
   * - useEffect()
   * - Start timer => Make API call after 200ms
   *
   *
   * key = iP
   *  - Destroy the component - clear the timer
   *  - Re-Render the component
   *  - useEffect()
   *  - Start timer => Make API call after 200ms
   *
   * After 200ms have passed - Make an API call with the help of function defined within setTimeOut
   */

  const fetchAutoSuggestResults = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_SUGGESTIONS_API}${searchInput}`);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(cacheResults({ [searchInput]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6 mr-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="hamburger"
          onClick={handleToggleSidebar}
        />
        <img
          className="h-10 -mt-2"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 mx-96">
        <div>
          <input
            className="w-5/6 p-1 px-4 border border-gray-500 rounded-l-full"
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
            placeholder="Search"
          />
          <button className="border py-1 px-2 bg-gray-100 border-gray-500 rounded-r-full">
            <FontAwesomeIcon size="sm" icon={faSearch} />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-1 w-[44rem] shadow-lg rounded-lg">
            <ul>
              {searchSuggestions.map((sug, index) => (
                <li
                  key={index}
                  className="py-1 px-2 shadow-sm hover:bg-gray-200"
                >
                  <FontAwesomeIcon className="pr-2" size="sm" icon={faSearch} />
                  {sug}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
