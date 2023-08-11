import threeDot from "../../../../../image/three-dot.png"
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function Photos() {
    
    return (
        <div className="photos-container">
            <div className="photos-header">
                <div className="photo-header-leftSide">
                    <p>Photos</p>
                </div>
                <div className="photo-header-rightSide">
                    <p>Add Photos/videos</p>
                    <img src={threeDot} width={25} className="friend-dot-icon" style={{padding:" 0 15px", backgroundcolor: "#E4E6EB"}}/>
                </div>
            </div>
            <div className="photos-select-page">
                <NavLink to="/accountDetails/photos/photosOfYou" className="photos-select-navlink">Photos of You</NavLink>
                <NavLink to="/accountDetails/photos/yourPhotos" className="photos-select-navlink">Your photos</NavLink>
                <NavLink to="/accountDetails/photos/albums" className="photos-select-navlink">Albums</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Photos;