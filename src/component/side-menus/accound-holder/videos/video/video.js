import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Video() {

    
    return (
        <div className="photos-container">
            <div className="photos-header">
                <div className="photo-header-leftSide">
                    <p>Videos</p>
                </div>
                
            </div>
            <div className="photos-select-page">
                <NavLink to='/accountDetails/video/yourVideos' className="photos-select-navlink">Your Videos</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Video