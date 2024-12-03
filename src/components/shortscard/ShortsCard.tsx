import "./ShortsCard.css";
import ShortsThumbnail from "./thumbnail/ShortsThumbnail.tsx";

interface IProps {
    color: string;
}

export default function ShortsCard(props: IProps) {
    return (
        <div>
            <ShortsThumbnail color={props.color} />
            <div className="short-description-container">
                <div className="short-description">
                    <a className={"short-title"}>Can you believe this short?!</a>
                    <p className={"short-info"}>102K views</p>
                </div>
            </div>
        </div>
    );
}

