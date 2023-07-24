import home from "../image/home.png"
import { NavLink } from "react-router-dom"
import videos from "../image/videos.png"
import markerplace from "../image/marketplace.png"
import games from "../image/games.png"
import seeall from "../image/seeall.png"
import black from "../image/black.jpg"



function SideBarMenus() {
    return(
        <div className="hover-container">
          <NavLink to="/page"> <div className="menu-contsiner">
              <img src={home} width={30} />
                <h2>Home</h2>
            </div></NavLink>
            <div className="menu-contsiner ">
                <img src={black} width={30} className="black" />
                <h2>Mohamed Arshath</h2>
            </div>

            <div className="menu-contsiner">
                <img src={videos} width={30} />
                <h2>Video</h2>
            </div>

            <div className="menu-contsiner">
                <img src={markerplace} width={30} />
                <h2>Markerplace</h2>
            </div>

            <div className="menu-contsiner">
                <img src={games} width={30} />
                <h2>Games</h2>
            </div>

            <div className="menu-contsiner">
                <img src={seeall} width={30} />
                <h2>See all</h2>
            </div>
        </div>
    )
}

export default SideBarMenus