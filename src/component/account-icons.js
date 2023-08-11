import home from "../image/home.png"
import { NavLink } from "react-router-dom"
import videos from "../image/videos.png"
import markerplace from "../image/marketplace.png"
import games from "../image/games.png"
import seeall from "../image/seeall.png"
import black from "../image/black.jpg"


function AccountIcons() {
    return (
        <div className="sideMenuBar">
            <nav>
                <div className="account-icons-container">
                    <NavLink to="/stories"className="accountIcon-contsiner">
                    <img src={home} width={30} />
                    </NavLink>
                    <NavLink to="/accountDetails" className="accountIcon-contsiner ">
                        <img src={black} width={30} className="black" />
                    </NavLink>
                    <hr/>
                    <NavLink to="/videos" className="accountIcon-contsiner">
                        <img src={videos} width={30} />
                    </NavLink>
                    <NavLink to="/markerplace" className="accountIcon-contsiner">
                        <img src={markerplace} width={30} />
                    </NavLink>
                    <NavLink to="/games" className="accountIcon-contsiner">
                        <img src={games} width={30} />
                    </NavLink>
                    <div className="accountIcon-contsiner">
                        <img src={seeall} width={30} />
                    </div>
                    <hr />
                </div>
            </nav>
        </div>
    )
}

export default AccountIcons