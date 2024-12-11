import GenreList from "../components/GenreList.tsx";
import VideoCardList from "../components/VideoCardList.tsx";
import ShortsCardList from "../components/ShortsCardList.tsx";
import "./LandingPage.css"

export default function LandingPage() {
    return (
        <div className="content-container">
            <GenreList/>
            <VideoCardList/>
            <ShortsCardList/>
            <VideoCardList/>
            <ShortsCardList/>
        </div>
    );
}