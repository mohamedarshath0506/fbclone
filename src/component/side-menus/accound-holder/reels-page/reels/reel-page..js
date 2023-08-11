import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function ReelPage() {

    
    return (
        <div className="photos-container">
            <div className="photos-header">
                <div className="photo-header-leftSide">
                    <p>Videos</p>
                </div>
                
            </div>
            <div className="photos-select-page">
                <NavLink to="/accountDetails/reelPage/yourReels" className="photos-select-navlink">Your Reels</NavLink>
                <NavLink to="/accountDetails/reelPage/savedReels" className="photos-select-navlink">Saved Reels</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ReelPage;