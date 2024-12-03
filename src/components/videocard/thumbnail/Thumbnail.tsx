import "./Thumbnail.css";

interface IProps {
    color: string;
}

export default function Thumbnail(props: IProps) {
    return (
        <div className="video-thumbnail-container" style={{backgroundColor: props.color}}>
            <p className={"durationContainer"}>14:56</p>
        </div>
    );
}
