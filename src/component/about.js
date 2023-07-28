import { NavLink, Outlet } from "react-router-dom"
import addwork from "../image/add-work.png"
import OverView from "./overView"
import schoolFirst from "../image/school-first.png"
import friends from "../image/friends.png"
import threeDot from "../image/three-dot.png"
import WorkAndEducation from "./work-and-education"


function About() {
    return (
        <div>
            <div className="about-container">
                <div className="about-content-btn">
                    <div className="about-header">
                        <h2>About</h2>
                    </div>
                    {/* <NavLink to="/accountDetails/about/addWorkPlace"> */}
                    <p>Overview</p>
                    {/* </NavLink> */}
                    <p>Work and education</p>
                    <p>Places lived</p>
                    <p>Contact and basic info</p>
                    <p>Family and relationships</p>
                    <p>Detalis about you</p>
                    <p>Life events</p>
                </div>
                
            </div>
            <OverView />
            <WorkAndEducation />
        </div>
    )
}

export default About