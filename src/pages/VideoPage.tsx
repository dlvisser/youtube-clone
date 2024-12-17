import "./VideoPage.css"
import VideoViewer from "../components/videoviewer/VideoViewer.tsx";
import VideoInformation from "../components/videoinformation/VideoInformation.tsx";

export default function VideoPage() {
    return (
        <div className="video-page-container">
            <VideoViewer/>
            <VideoInformation/>
        </div>
    );
}