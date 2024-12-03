import "./ShortsCardList.css";
import ShortsCard from "./shortscard/ShortsCard.tsx";

export default function ShortsCardList() {
    const colors = ["purple", "orange", "gray", "red", "blue"];

    return (
        <div className={"video-card-list"}>
            {Array.from({ length: 5 }, (_, index) => (
                <ShortsCard color={colors[index]} />
            ))}
        </div>
    );
}

