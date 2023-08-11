import home from "../../image/home.png"
import { NavLink } from "react-router-dom"
import videos from "../../image/videos.png"
import markerplace from "../../image/marketplace.png"
import games from "../../image/games.png"
import seeall from "../../image/seeall.png"
import black from "../../image/black.jpg"
import { useState } from 'react';

function SideBarMenus() {
    const[showSidebar, setShowSidebar] = useState(false);
    console.log('showSidebar', showSidebar)
    return(
        <div className="sideMenuBar">
            <nav>
                <div className="hover-container fixed-content">
                    <NavLink to="/stories"className="menu-contsiner">
                    <img src={home} width={30} />
                    {/* {showSidebar &&  */}
                        <h2>Home</h2>   
                    {/* } */}
                    </NavLink>
                    <NavLink to="/accountDetails" className="menu-contsiner " 
                    // onClick={(e) => {
                    //     setShowSidebar(true)
                    // }}
                    >
                        <img src={black} width={30} className="black" />
                        {/* {showSidebar &&  */}
                        <h2>Mohamed Arshath</h2>
                    {/* } */}
                    </NavLink>
                    <hr/>
                    <NavLink to="/videos" className="menu-contsiner">
                        <img src={videos} width={30} />
                        {/* {showSidebar &&  */}
                        <h2>Video</h2>
                    {/* } */}
                    </NavLink>
                    <NavLink to="/markerplace" className="menu-contsiner">
                        <img src={markerplace} width={30} />
                        {/* {showSidebar &&  */}
                        <h2>Markerplace</h2>
                    {/* } */}
                    </NavLink>
                    <NavLink to="/games" className="menu-contsiner">
                        <img src={games} width={30} />
                        {/* {showSidebar &&  */}
                        <h2>Games</h2>
                    {/* } */}
                    </NavLink>
                    <div className="menu-contsiner">
                        <img src={seeall} width={30} />
                        {/* {showSidebar &&  */}
                        <h2>See all</h2>
                    {/* } */}
                    </div>
                    <hr />
                </div>
            </nav>
        </div>
    )
}

export default SideBarMenus