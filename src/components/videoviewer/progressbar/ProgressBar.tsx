import "./ProgressBar.css"

export default function ProgressBar() {
    return (
        <div className="progress-container">
            <div className="progress-bar total-bar"></div>
            <div className="progress-bar buffer-bar"></div>
            <div className="progress-bar watch-bar"></div>
        </div>
    );
}