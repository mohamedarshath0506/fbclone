import addWork from "../image/add-work.png"
import cap from "../image/cap.png"
import friends from "../image/friends.png"
import threeDot from "../image/three-dot.png"
import lives from "../image/lives.png"
import earth from "../image/earth.png"
import location from "../image/location.png"
import edit from "../image/edit.png"
import heart from "../image/heart.png"
import phone from "../image/phone.png"
import lock from "../image/lock.png"


function OverView() {
    return (
        <div>
                {/* <div className="addwork-container"> */}
                    <div className="add-work-content">
                        <img src={addWork} width={40} />
                        <p>Add a workplace</p>
                    </div>
                    <div className="cap-content">   
                        <div className="degree">
                            <div>
                                <img src={cap} width={30} />
                            </div>
                            <div className="school-name">
                                <h5>Went to Islamic model matric hr sec school</h5>
                                <p>Graduated in 2003</p>
                            </div>
                        </div>
                        <div className="three-dot">
                            <img src={friends} width={30} />
                            <img src={threeDot} width={30} className="dot-icon" />
                        </div>
                    </div>
                    <div className="live-detail-content">
                        <div className="degree">
                            <div>
                                <img src={lives} width={30} />
                            </div>
                            <div className="school-name">
                                <span>Lives in <b>Chennai, India</b></span>
                            </div>
                        </div>
                        <div className="three-dot">
                            <img src={earth} width={30} />
                            <img src={threeDot} width={30} className="dot-icon" />
                        </div>
                    </div>
                    <div className="location-detail-content">
                        <div className="degree">
                            <div>
                                <img src={location} width={30} />
                            </div>
                            <div className="school-name">
                                <span>From <b>Chrompet, Tamil Nadu, India</b></span>
                            </div>
                        </div>
                        <div className="three-dot">
                            <img src={earth} width={30} />
                            <img src={threeDot} width={30} className="dot-icon" />
                        </div>
                    </div>
                    <div className="location-detail-content">
                        <div className="degree">
                            <div>
                                <img src={heart} width={30} />
                            </div>
                            <div className="school-name">
                                <span>In an open relationship</span>
                            </div>
                        </div>
                        <div className="three-dot">
                            <img src={earth} width={30} />
                            <img src={edit} width={30} className="dot-icon" />
                        </div>
                    </div>
                    <div className="location-detail-content">
                        <div className="degree">
                            <div>
                                <img src={phone} width={30} />
                            </div>
                            <div className="school-name">
                                <h5>7358654365</h5>
                                <p>Mobile</p>
                            </div>
                        </div>
                        <div className="three-dot">
                            <img src={lock} width={30} />
                            <img src={edit} width={30} className="dot-icon" />
                        </div>
                    </div>
                 {/* </div> */}
                </div>
    )
}

export default OverView