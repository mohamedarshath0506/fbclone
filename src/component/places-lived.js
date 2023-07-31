import addwork from "../image/add-work.png"
import threeDot from "../image/three-dot.png"
import earth from "../image/earth.png"


function PlacesLived() {
    return (
        <div className="addwork-container">
            <div className="school-content">
                        <h3>Places lived</h3>
                    </div>
                    <div className="school-are-college-place">
                        <img src={addwork} width={50} />
                        <p>Add City</p>
                    </div>
                    <div className="cap-content">   
                        <div className="degree">
                            <div>
                               
                            </div>
                            <div className="school-name">
                                <h5><b>Chennai, India</b></h5>
                                <p>Current city</p>
                            </div>
                        </div>
                        <div className="three-dot">
                            <img src={earth} width={30} />
                            <img src={threeDot} width={30} className="dot-icon" />
                        </div>
                    </div>

                    <div className="cap-content">   
                        <div className="degree">
                            <div>
                                
                            </div>
                            <div className="school-name">
                                <h5><b>Chrompet, Tamil Nadu, India</b></h5>
                                <p>Hometown</p>
                            </div>
                        </div>
                        <div className="three-dot">
                            <img src={earth} width={30} />
                            <img src={threeDot} width={30} className="dot-icon" />
                        </div>
                    </div>
        </div>
    )
}

export default PlacesLived