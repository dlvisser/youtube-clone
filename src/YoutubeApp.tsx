import MastHead from "./components/masthead/MastHead";
import "./YoutubeApp.css";
import VideoCardList from "./components/VideoCardList.tsx";
import ShortsCardList from "./components/ShortsCardList.tsx";
import GenreList from "./components/GenreList.tsx";

export default function YoutubeApp() {
  return (
      <div id="yt-app">
          <MastHead/>
          <GenreList/>
          <VideoCardList/>
          <h2>Shorts</h2>
          <ShortsCardList/>
          <VideoCardList/>
          <h2>Shorts</h2>
          <ShortsCardList/>

      </div>
  );
}
