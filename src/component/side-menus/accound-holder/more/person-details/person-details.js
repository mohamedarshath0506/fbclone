import msClg from "../../../../../image/mohamedsathakclg.jpg"
import thondIBeach from "../../../../../image/thondi-beach.jpg"
import thondiCity from "../../../../../image/thondi-city.jpg"

function PersonDetails() {
    return (
        <div>
            <div className="check-person-details-content">
                <div className="friend-requests-content">
                    <div className="friends">
                        <img src={msClg} width={90} height={100}/>
                    </div>
                    <div>
                        <div className="check-ins-details collage">
                            <h3>Mohamed Sathak College of Arts and Science, Chennai (Madras) 2009 -2012</h3>
                            <div className="collage-details" style={{padding: "20px 10px"}}>
                                <div style={{float: "left"}}>
                                    <img src={msClg} width={90} height={90} style={{borderRadius: "50px"}} />
                                </div>
                                <div style={{display: "flow-root", padding: "10px"}}>
                                    <p style={{fontSize: "18px", fontWeight: 600, textAlign: "left", color: "#000"}}>Mohamed Sathak College of Arts and Science, Chennai (Madras) 2009 -2012</p>
                                    <p style={{ textAlign: "left", padding: "5px 0"}}>Community</p>
                                    <p style={{ textAlign: "left", fontSize: "15px"}}>Mohamed Sathak College of Arts and Science, Chennai (Madras)</p>
                                    <p style={{ textAlign: "left", fontSize: "15px", fontWeight: 600, padding: "10px 0", color: "#000"}}>351 people like this including 1 of your friends</p>
                                </div>
                            </div>
                        </div>
                        <div className="check-ins-details">
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
                        <div className="check-ins-details collage">
                            <h3>Thondi</h3>
                            <div className="collage-details" style={{padding: "20px 10px"}}>
                                <div style={{float: "left"}}>
                                    <img src={thondIBeach} width={90} height={90} style={{borderRadius: "50px"}} />
                                </div>
                                <div style={{display: "flow-root", padding: "10px"}}>
                                    <p style={{fontSize: "18px", fontWeight: 600, textAlign: "left", color: "#000"}}>Thondi﻿</p>
                                    <p style={{ textAlign: "left", padding: "5px 0"}}>City</p>
                                    <p style={{ textAlign: "left", fontSize: "15px", padding: "10px 0"}}><a href="https://www.google.com/maps/dir/?api=1&destination=9.7763888888889%2C79.007777777778&fbclid=IwAR1ZkrDvWOg5MIrD3XueuBMSf3OMsITEFZM3hXHUsJWRUIns5fgGldyGhuU" style={{textDecoration: "none"}}>623409</a></p>
                                    <p style={{ textAlign: "left", fontSize: "15px"}}><a href="https://www.google.com/maps/place/Thondi,+Tamil+Nadu/@9.7530027,78.9895105,13z/data=!3m1!4b1!4m6!3m5!1s0x3b004aa65ab06ce9:0x50dd3252b537e2a!8m2!3d9.7438168!4d79.0184586!16zL20vMGY2Z25u?entry=ttu">http://www.mythondi.com/</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="check-ins-details">
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
                            <div className="check-ins-details collage">
                                <h3>Thondi City</h3>
                                <div className="collage-details" style={{padding: "20px 10px"}}>
                                    <div style={{float: "left"}}>
                                        <img src={thondiCity} width={90} height={90} style={{borderRadius: "50px"}} />
                                    </div>
                                    <div style={{display: "flow-root", padding: "10px"}}>
                                        <p style={{fontSize: "18px", fontWeight: 600, textAlign: "left", color: "#000"}}>Thondi City﻿</p>
                                        <p style={{ textAlign: "left", padding: "5px 0"}}>Public Figure</p>
                                        <p style={{ textAlign: "left", fontSize: "15px", padding: "0 0 5px 0"}}>In Ramanathapuram have a one of the cute city. This city is Thondi.</p>
                                        <p style={{ textAlign: "left", fontSize: "15px", fontWeight: 600, color: "#008000"}}>Always open</p>
                                        <p style={{ textAlign: "left", fontSize: "15px", fontWeight: 600, padding: "10px 0"}}>3,480 people like this including 53 of your friends</p>
                                    </div>
                                </div>
                            </div>
                            <div className="check-ins-details">
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