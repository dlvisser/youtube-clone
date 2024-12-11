import MastHead from "./components/masthead/MastHead";
import "./YoutubeApp.css";
import Drawer from "./components/appdrawer/Drawer.tsx";
import LandingPage from "./pages/LandingPage.tsx";

export default function YoutubeApp() {
  return (
      <div className="yt-app">
          <MastHead/>
          <Drawer/>
          <LandingPage/>
      </div>
  );
}
