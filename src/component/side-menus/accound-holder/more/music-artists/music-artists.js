import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import thondiCity from "../../../../../image/thondi-city.jpg"

function MusicArtists() {
    return (
        <div>
        <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Music</p>
                </div>
                <div className="recent-content" style={{paddingLeft: "10px"}}>
                  <NavLink to="/accountDetails/musicArtists/music" style={{textDecoration: "none"}}><p>Artists</p></NavLink>
                </div>
                <div>
                    <Outlet />
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

export default MusicArtists;