import MastHead from "./components/masthead/MastHead";
import "./YoutubeApp.css";
import VideoCardList from "./components/VideoCardList.tsx";
import ShortsCardList from "./components/ShortsCardList.tsx";
import GenreList from "./components/GenreList.tsx";
import Drawer from "./components/appdrawer/Drawer.tsx";

export default function YoutubeApp() {
  return (
      <div className="yt-app">
          <MastHead/>
          <Drawer/>
          <div className="content-container">
              <GenreList/>
              <VideoCardList/>
              <h2>Shorts</h2>
              <ShortsCardList/>
              <VideoCardList/>
              <h2>Shorts</h2>
              <ShortsCardList/>
          </div>
      </div>
  );
}
