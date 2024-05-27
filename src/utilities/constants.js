const GOOGLE_API_KEY = "AIzaSyAsx4KicntbH9oGJOC5fWAFrgj69a7XuYM";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const maxLiveChatMessageCount = 25;
