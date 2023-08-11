import { NavLink } from "react-router-dom"
import reels from "../../../../image/reels.svg"
import stories from "../../../../image/stories.svg"
import video from "../../../../image/video.svg"
import { Outlet } from "react-router-dom"
import YourMind from "../your-mine/your-mind"
import Page from "../../../page"

function ReelsMenu() {
    return(
        <div>
            <nav>
                <div className="hover-page">
                    <NavLink to="/stories/stories" className="menu-content">  
                        <img src={stories} width={30} alt="stories" className="link" />
                        <p className="link">Stories</p>
                    </NavLink>
                    <NavLink to="/stories/reels" className="reels-content menu-content">
                        <img src={reels} width={30} alt="reels" className="link" />
                        <p className="link">Reels</p>
                    </NavLink>
                    <NavLink to="/stories/rooms" className="reels-content menu-content">
                        <img src={video} width={30} alt="video" className="link" />
                        <p className="link">Rooms</p>
                    </NavLink>
                </div>
            </nav>
            <Outlet />
            <YourMind />
            <Page />
        </div>
    )
}

export default ReelsMenu;