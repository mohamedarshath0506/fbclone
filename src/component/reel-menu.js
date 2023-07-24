import { NavLink } from "react-router-dom"
import reels from "../image/reels.svg"
import stories from "../image/stories.svg"
import video from "../image/video.svg"
import { Outlet } from "react-router-dom"


function ReelsMenu() {
    return(
        <div>
            <nav>
                <div className="hover-page">
                    <NavLink to="/home/stories" className="menu-content">  
                        <img src={stories} width={30} className="link" />
                        <p className="link">Stories</p>
                    </NavLink>
                    <NavLink to="/home/reels" className="reels-content menu-content">
                        <img src={reels} width={30} className="link" />
                        <p className="link">Reels</p>
                    </NavLink>
                    <NavLink to="/home/rooms" className="reels-content menu-content">
                        <img src={video} width={30} className="link" />
                        <p className="link">Rooms</p>
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default ReelsMenu