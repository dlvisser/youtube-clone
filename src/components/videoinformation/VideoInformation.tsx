import "./VideoInformation.css"

export default function VideoInformation() {
    return (
        <div className="info-container">
            <h2>This is the video's title</h2>
            <div className="top-section">
                <div className="video-profile-container">
                    <div className="profile-image"/>
                    <div className="profile-name-container">
                        <h5>Profile</h5>
                        <p>82.9K subscribers</p>
                    </div>
                    <div className="subscribe-button">
                        <p>Subscribe</p>
                    </div>
                </div>
                <div className="video-actions">
                    <div className="video-likes">
                        <p>4.7K</p>
                    </div>
                    <div className="video-share-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
                             focusable="false"
                             aria-hidden="true" fill={"currentColor"}>
                            <path
                                d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
                        </svg>
                        <p>Share</p>
                    </div>
                    <div className="video-extra-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
                             focusable="false" aria-hidden="true" fill={"currentColor"}>
                            <path
                                d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="video-extra-information">

            </div>
        </div>
    );
}