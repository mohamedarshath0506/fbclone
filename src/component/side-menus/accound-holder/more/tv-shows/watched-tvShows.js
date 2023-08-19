import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function WatchedTvShows() {
    return (
        <div className="checkIns-container">
            <div className="check-ins-header">
                <p>TV shows</p>
            </div>
            <div className="recent-content">
               <NavLink to="/accountDetails/watchedTvShows/watchedTv" style={{textDecoration: "none"}}><p>Watched</p></NavLink>
               <NavLink to="/accountDetails/watchedTvShows/tvShow" style={{textDecoration: "none"}}><p>TV Shows</p></NavLink>
            </div>
            <div>
                <Outlet />
                {/* <p style={{fontSize: "20px", fontWeight: 600, margin: 0, padding: "24px 0 36px", color:"#65646b"}}>No Watched to show</p> */}
            </div>
        </div>
    )
}

export default WatchedTvShows;