import MastHead from "./components/masthead/MastHead";
import "./YoutubeApp.css";
import LandingPage from "./pages/LandingPage.tsx";
import VideoPage from "./pages/VideoPage.tsx";

export default function YoutubeApp() {
    const debugMode = false;

  return (
      <div className="yt-app">
          <MastHead/>
          {debugMode ? <VideoPage/> : <LandingPage/>}
      </div>
  );
}
