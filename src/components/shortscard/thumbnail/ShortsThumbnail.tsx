import "./ShortsThumbnail.css";

interface IProps {
    color: string;
}

export default function ShortsThumbnail(props: IProps) {
    return (
        <div className="thumbnailContainer" style={{backgroundColor: props.color}}/>
    );
}
