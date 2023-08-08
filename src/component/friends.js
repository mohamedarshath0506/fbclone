import threeDot from "../image/three-dot.png"
import AllFriends from "./allFriends"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"
import camera from "../image/camera-man.jpeg"

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
                {/* <p className="allFriends">All friends</p> */}
                <p className="allFriends">Recently Added</p>
                <p className="allFriends">Birtdays</p>
                <p className="allFriends">Current city</p>
                <p className="allFriends">Hometown</p>
                <p className="allFriends">Following</p>
            </div>
            <div style={{background: "red"}}>
            <Outlet />
            {/* <AllFriends /> */}
            </div>
            
        </div>
    )
}

export default Friends