import { Outlet } from "react-router"
import camera from "../../../../image/camera-man.jpeg"
import msClg from "../../../../image/mohamedsathakclg.jpg"
import thondIBeach from "../../../../image/thondi-beach.jpg"
import thondiCity from "../../../../image/thondi-city.jpg"
import threeDot from "../../../../image/three-dot.png"
import { NavLink } from "react-router-dom"

function CheckIns() {
    return (
        <div>
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Check-ins</p>
                </div>
                <div className="recent-content">
                   <NavLink to="/accountDetails/checkIns/personDetails" style={{textDecoration: "none"}}><p>Recent</p></NavLink>
                </div>
                <Outlet />
            </div> 
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Sports</p>
                </div>
                <div className="recent-content">
                    <p>Sports Teams</p>
                    <p>Athletes</p>
                </div>
            </div>
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Music</p>
                </div>
                <div className="recent-content">
                   {/* <NavLink to="/accountDetails/checkIns/music" > */}
                    <p>Artists</p>
                    {/* </NavLink>  */}
                </div>
                <div>
                    {/* <Outlet /> */}
                    <p style={{fontSize: "20px", fontWeight: 600, margin: 0, padding: "24px 0 36px", color:"#65646b"}}>No Artists to show</p>
                </div>
            </div>
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Movies</p>
                </div>
                <div className="recent-content">
                    <p>Watched</p>
                    <p>Movies</p>
                </div>
                <div>
                    <p style={{fontSize: "20px", fontWeight: 600, margin: 0, padding: "24px 0 36px", color:"#65646b"}}>No Watched to show</p>
                </div>
            </div>
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>TV shows</p>
                </div>
                <div className="recent-content">
                    <p>Watched</p>
                    <p>TV Shows</p>
                </div>
                <div>
                    <p style={{fontSize: "20px", fontWeight: 600, margin: 0, padding: "24px 0 36px", color:"#65646b"}}>No Watched to show</p>
                </div>
            </div>
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Books</p>
                </div>
                <div className="recent-content">
                    <p>Read</p>
                    <p>Books</p>
                </div>
                <div>
                    <p style={{fontSize: "20px", fontWeight: 600, margin: 0, padding: "24px 0 36px", color:"#65646b"}}>No Read to show</p>
                </div>
            </div>
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Apps and games</p>
                </div>
                <div className="recent-content">
                    <p>Apps and Games</p>
                </div>
                <div style={{textAlign: "left"}}>
                   <img src={thondiCity} width={162} height={162} style={{borderRadius: "10px"}} />
                   <p style={{fontSize: "15px",fontWeight: 600, color: "#050505"}}>Merdekagame</p>
                </div>
            </div>
        </div>
    )
}

export default CheckIns;