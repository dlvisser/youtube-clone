import "./ShortsCardList.css";
import ShortsCard from "./shortscard/ShortsCard.tsx";

export default function ShortsCardList() {
    const colors = ["purple", "orange", "gray", "red", "blue"];

    return (
        <div>
            <div className={"shorts-list-header"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false"
                     aria-hidden="true">
                    <path
                        d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z"
                        fill="#f03"></path>
                    <path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
                </svg>
                <h2>Shorts</h2>
            </div>
            <div className={"video-card-list"}>
                {Array.from({length: 5}, (_, index) => (
                    <ShortsCard color={colors[index]}/>
                ))}
            </div>
        </div>

    );
}

