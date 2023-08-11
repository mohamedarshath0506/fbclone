import video from "../../../../image/video.svg"
import black from "../../../../image/black.jpg"
import photosvideos from "../../../../image/photosvideos.png"
import smile from "../../../../image/smile.png"

function YourMind() {
    return (
        <div className="live-container">
            <div className="mind-content">
                <img src={black} width={50} />
                <input type="text" placeholder="What's on your mind, Mohamed?" />
            </div>
                <hr className="live-line"/>
            <div className="feeling-container">
                <div className="your-mind-container menu-contsiner">
                    <img src={video} width={30} />
                    <p>Live Video</p>
                </div>
                <div className="your-mind-container menu-contsiner">
                    <img src={photosvideos} width={30} />
                    <p>photos/videos</p>
                </div>
                <div className="your-mind-container menu-contsiner">
                    <img src={smile} width={30} />
                    <p>Feeling/activity</p>
                </div>
            </div>
        </div>
    )
}

export default YourMind