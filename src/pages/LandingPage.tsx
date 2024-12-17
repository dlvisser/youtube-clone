import GenreList from "../components/GenreList.tsx";
import VideoCardList from "../components/VideoCardList.tsx";
import ShortsCardList from "../components/ShortsCardList.tsx";
import "./LandingPage.css"
import Drawer from "../components/appdrawer/Drawer.tsx";

export default function LandingPage() {
    return (
        <>
            <Drawer/>
            <div className="content-container">
                <GenreList/>
                <VideoCardList/>
                <ShortsCardList/>
                <VideoCardList/>
                <ShortsCardList/>
            </div>
        </>
    );
}