import { hover } from "@testing-library/user-event/dist/hover"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"

function Movies() {
    return (
        <div className="checkIns-container">
            <div className="check-ins-header">
                <p>Movies</p>
            </div>
            <div className="recent-content">
              <NavLink to="/accountDetails/movies/musicWatched" style={{textDecoration: "none"}}><p>Watched</p></NavLink>
              <NavLink to="/accountDetails/movies/movie" style={{textDecoration: "none"}}><p>Movies</p></NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Movies