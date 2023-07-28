import laptop from "../image/mac.jpg"
import icici from "../image/icici.jpg"
import cameraMan from "../image/camera-man.jpeg"
import newCamera from "../image/newCamera.jpeg"
import usingTab from "../image/using-tab.jpeg"
import mount from "../image/mount.jpeg"
import roadview from "../image/roadview.jpeg"

function Reels() {
    return(
        <div>
            <div className="stories-reels-rooms-page">
                <div className="stories-container" >
                    <div className="stories-icons">
                        <img src={laptop} width={20} height={20} />
                    </div>
                    <img src={laptop} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
                <div className="stories-container">
                    <div className="stories-icons">
                        <img src={icici} width={20} height={20} />
                    </div>
                    <img src={icici} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
                <div className="stories-container">
                    <div className="stories-icons">
                        <img src={cameraMan} width={20} height={20} />
                    </div>
                    <img src={cameraMan} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
                <div className="stories-container">
                    <div className="stories-icons">
                        <img src={newCamera} width={20} height={20} />
                    </div>
                    <img src={newCamera} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
                <div className="stories-container">
                    <div className="stories-icons">
                        <img src={usingTab} width={20} height={20} />
                    </div>
                    <img src={usingTab} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
                <div className="stories-container">
                    <div className="stories-icons">
                        <img src={mount} width={20} height={20} />
                    </div>
                    <img src={mount} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
                <div className="stories-container">
                    <div className="stories-icons">
                        <img src={laptop} width={20} height={20} />
                    </div>
                    <img src={laptop} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
                <div className="stories-container">
                    <div className="stories-icons">
                        <img src={roadview} width={20} height={20} />
                    </div>
                    <img src={roadview} width={200} height={300} />
                    <p className="stories-name">Arshath</p>
                </div>
            </div>
        </div>
    )
}

export default Reels