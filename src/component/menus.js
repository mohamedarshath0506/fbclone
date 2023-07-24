import home from "../image/home.png"
import login from "../image/login.png"
import { NavLink } from "react-router-dom"
import reels from "../image/reels.svg"
import stories from "../image/stories.svg"
import video from "../image/video.svg"
import { Outlet } from "react-router-dom"
import videos from "../image/videos.png"
import markerplace from "../image/marketplace.png"
import games from "../image/games.png"
import seeall from "../image/seeall.png"
import black from "../image/black.jpg"
import photosvideos from "../image/photosvideos.png"
import smile from "../image/smile.png"
import Page from "./page"


function Menus() {
    return(
        <div className="hover-container">
          {/* <NavLink to="/page"> <div className="menu-contsiner">
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
            </div> */}

            {/* <hr/> */}
            {/* <nav>
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
            <Outlet /> */}
            {/* <div className="mind-container">
                <div className="live-container">
                    <div className="mind-content">
                        <img src={black} width={50} />
                        <input type="text" placeholder="What's on your mind, Mohamed?" />
                    </div>
                    <hr className="live-line"/>
                    <div className="feeling-container">
                        <div className="your-mind-container menu-contsiner">
                            <img src={video} width={30} />
                            <p>Live Video</p>
                        </div>

                        <div className="your-mind-container menu-contsiner">
                            <img src={photosvideos} width={30} />
                            <p>photos/videos</p>
                        </div>

                        <div className="your-mind-container menu-contsiner">
                            <img src={smile} width={30} />
                            <p>Feeling/activity</p>
                        </div>
                    </div>
                </div>
            </div> */}
        {/* <Page/> */}
            {/* <div className="post-container">
                <div>
                    <h1>Arshath</h1>
                </div>
                <div>
                    <img src={black} width={795} height={500} />
                </div>
            </div>

            <div >
                <div>
                    <h1>Arshath</h1>
                </div>
                <div>
                    <img src={black} width={795} height={500} />
                </div>
            </div> */}
        </div>
    )
}

export default Menus