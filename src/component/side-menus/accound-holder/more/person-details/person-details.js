import camera from "../../../../../image/camera-man.jpeg"
import msClg from "../../../../../image/mohamedsathakclg.jpg"
import thondIBeach from "../../../../../image/thondi-beach.jpg"
import thondiCity from "../../../../../image/thondi-city.jpg"
// import threeDot from "../../../../image/three-dot.png"


function PersonDetails() {
    return (
        <div>
            <div className="check-person-details-content">
                <div className="friend-requests-content">
                    <div className="friends">
                        <img src={msClg} width={90} height={100}/>
                    </div>
                    <div>
                        <div className="check-ins-details">
                            <h3>Mohamed Sathak College of Arts and Science, Chennai (Madras) 2009 -2012</h3>
                            <p>Chennai, India</p>
                            <p>Visited on December 14, 2021</p>
                        </div>
                    </div>
                </div>
                <div className="friend-requests-content">
                    <div className="friends">
                        <img src={thondIBeach} width={90} height={100}/>
                    </div>
                    <div>
                        <div className="check-ins-details">
                            <h3>Thondi</h3>
                            <p>India</p>
                            <p>Visited on October 17, 2020</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="check-person-details-content">
                    <div className="friend-requests-content">
                        <div className="friends">
                            <img src={thondiCity} width={90} height={100}/>
                        </div>
                        <div>
                            <div className="check-ins-details">
                                <h3>Thondi City</h3>
                                <p>Ramanathapuram</p>
                                <p>Visited on November 18, 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PersonDetails;