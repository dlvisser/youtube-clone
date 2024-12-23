import VideoCard from "./videocard/VideoCard.tsx";
import "./VideoCardList.css";

export default function VideoCardList() {
    const colors = ["purple", "orange", "gray", "red", "blue" , "yellow"];

    return (
        <div className={"video-card-list"}>
            {Array.from({ length: 12 }, (_, index) => (
                <VideoCard color={colors[index%6]} />
            ))}
        </div>
    );
}

