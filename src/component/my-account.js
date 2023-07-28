import home from "../image/home.png"
import videos from "../image/videos.png"
import markerplace from "../image/marketplace.png"
import games from "../image/games.png"
import seeall from "../image/seeall.png"
import black from "../image/black.jpg"
import { NavLink } from "react-router-dom"

function MyAccount() {
    return (
        <nav>
            <div className="hover-container fixed-content">
                <NavLink to="/stories" className="myAccount-details">
                    <img src={home} width={20} />
                </NavLink>
                <NavLink to="/accountDetails" cclassName="myAccount-details">
                    <img src={black} width={30} className="black" />
                </NavLink>
                <NavLink to="/videos" className="myAccount-details">
                    <img src={videos} width={30} />
                </NavLink>
                <NavLink to="/markerplace" className="myAccount-details">
                    <img src={markerplace} width={30} />
                </NavLink>
                <NavLink to="/games" className="myAccount-details">
                    <img src={games} width={30} />
                </NavLink>
                <div className="myAccount-details">
                    <img src={seeall} width={30} />
                </div>
            </div>
        </nav>
    )
}

export default MyAccount