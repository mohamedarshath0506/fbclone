import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function AppsAndGames() {
    return (
        <div className="checkIns-container">
            <div className="check-ins-header">
                <p>Apps and games</p>
            </div>
            <div className="recent-content" style={{paddingLeft: "10px"}}>
            <NavLink to="/accountDetails/appsAndGames/merdekagame" style={{textDecoration:"none", paddingLeft: "10px"}}><p>Apps and Games</p></NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default AppsAndGames;