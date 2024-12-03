import Thumbnail from "./thumbnail/Thumbnail.tsx";
import "./Videocard.css";

interface IProps {
    color: string;
}

export default function VideoCard(props: IProps) {
    return (
        <div>
            <Thumbnail color={props.color} />
            <div className="video-description-container">
                <div className="video-profile-image"/>
                <div className="video-description">
                    <a className={"video-title"}>You will not believe I made this?!</a>
                    <p className={"profile-name"}>Test Channel</p>
                    <p className={"video-info"}>81K views * 8 months ago</p>
                </div>
            </div>
        </div>
    );
}

