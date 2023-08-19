import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function MusicArtists() {
    return (
        <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Music</p>
                </div>
                <div className="recent-content">
                  <NavLink to="/accountDetails/musicArtists/music" style={{textDecoration: "none"}}><p>Artists</p></NavLink>
                </div>
                <div>
                    <Outlet />
                    {/* <p style={{fontSize: "20px", fontWeight: 600, margin: 0, padding: "24px 0 36px", color:"#65646b"}}>No Artists to show</p> */}
                </div>
            </div>
    )
}

export default MusicArtists;