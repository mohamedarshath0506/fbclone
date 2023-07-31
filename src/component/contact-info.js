import { NavLink, Outlet } from "react-router-dom"
import addwork from "../image/add-work.png"
import edit from "../image/edit.png"
import phone from "../image/phone.png"
import lock from "../image/lock.png"
import email from "../image/email.png"
import male from "../image/male.png"
import earth from "../image/earth.png"
import threeperson from "../image/three-person.png"
import cake from "../image/cake.png"



function ContactInfo() {
    return (
        <div className="addwork-container">
            <div className="school-content">
                <h3>Contact info</h3>
            </div>
            <div className="school-are-college-place">
                <img src={addwork} width={50} />
                <p>Add a phone number confirmation badge</p>
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
            <div className="location-detail-content">
                <div className="degree">
                    <div>
                        <img src={email} width={30} />
                    </div>
                    <div className="school-name">
                        <h5>arshath1100@gmail.com</h5>
                        <p>Email</p>
                    </div>
                </div>
                <div className="three-dot">
                    <img src={lock} width={30} />
                    <img src={edit} width={30} className="dot-icon" />
                </div>
            </div>  
            <div className="school-content">
                <h3>Websites and social links</h3>
            </div>
            <div className="school-are-college-place">
                <img src={addwork} width={50} />
                <p>Add a website</p>
            </div>
            <div className="school-are-college-place">
                <img src={addwork} width={50} />
                <p>Add a social link</p>
            </div>
            <div className="school-content">
                <h3>Basic info</h3>
            </div>
            <div className="location-detail-content">
                <div className="degree">
                    <div>
                        <img src={male} width={30} />
                    </div>
                    <div className="school-name">
                        <h5>Male</h5>
                        <p>Gender</p>
                    </div>
                </div>
                <div className="three-dot">
                    {/* <img src={lock} width={30} /> */}
                    <img src={edit} width={30} className="dot-icon" />
                </div>
            </div> 
            <div className="location-detail-content">
                <div className="degree">
                    <div>
                        <img src={male} width={30} />
                    </div>
                    <div className="school-name">
                        <h5>he/him</h5>
                        <p>System pronouns</p>
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
                            <img src={cake} width={30} />
                        </div>
                        <div className="school-name">
                            <h5>June 6</h5>
                            <p>Birth date</p>
                        </div>
                    </div>
                    <div className="three-dot">
                        <img src={threeperson} width={30} />
                        <img src={edit} width={30} className="dot-icon" />
                    </div>
                </div> 
                <div className="location-detail-content">
                    <div className="degree">
                        <div>
                            {/* <img src={male} width={30} /> */}
                        </div>
                        <div className="school-name">
                            <h5>2001</h5>
                            <p>Birth year</p>
                        </div>
                    </div>
                    <div className="three-dot">
                        <img src={threeperson} width={30} />
                            {/* <img src={edit} width={30} className="dot-icon" /> */}
                    </div>
                </div> 
                <div className="location-detail-content">
                    <div className="degree">
                        <div>
                            <img src={male} width={30} />
                        </div>
                        <div className="school-name">
                            <h5>English language</h5>
                            <p>Languages</p>
                        </div>
                    </div>
                    <div className="three-dot">
                        <img src={earth} width={30} />
                        <img src={edit} width={30} className="dot-icon" />
                    </div>
                </div> 
        </div>
    )
}

export default ContactInfo