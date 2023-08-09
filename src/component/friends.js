import threeDot from "../image/three-dot.png"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"

function Friends() {
    return (
        <div className="friend-requests">
            
            <div className="find-friend">
                <h3>Friends</h3>
                <input type="text" placeholder="Search"/>
                <h5>Friend requests</h5>
                <h5>Find Friend</h5>
                <div className="three-dot-friend">
                    <img src={threeDot} width={30} className="friend-dot-icon" />
                </div>
            </div>
            <div className="all-friend-requests">
                <NavLink to="/accountDetails/friends/allFriends" className="allFriends">All friends</NavLink>
                <NavLink to="/accountDetails/friends/recentlyAdded" className="allFriends">Recently Added</NavLink>
                <NavLink to="/accountDetails/friends/brithday" className="allFriends">Birtdays</NavLink>
                <NavLink to="/accountDetails/friends/currentCity" className="allFriends">Current city</NavLink>
                <NavLink to="/accountDetails/friends/homeTown" className="allFriends">Hometown</NavLink>
                <NavLink to="/accountDetails/friends/following" className="allFriends">Following</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
            
        </div>
    )
}

export default Friends