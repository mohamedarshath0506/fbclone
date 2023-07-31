import { NavLink, Outlet } from "react-router-dom"
import addwork from "../image/add-work.png"
import OverView from "./overView"
import schoolFirst from "../image/school-first.png"
import friends from "../image/friends.png"
import threeDot from "../image/three-dot.png"



function WorkAndEducation() {
    return (
        <div className="school-first-container addwork-container">
            <div className="school-content">
                <h3>Work</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add a workplace</p>
                </div>
                <h3>College</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add college</p>
                </div>
                <h3>High school</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add high school</p>
                </div>
                <div className="degree-school-to-college">   
                    <div className="school-to-college">
                        <div>
                            <img src={schoolFirst} width={30} />
                        </div>
                        <div className="school-name-content">
                            <h5>Went to Islamic model matric hr sec school</h5>
                            <p>Class of 2033</p>
                        </div>
                    </div>
                    <div className="three-dot">
                        <img src={friends} width={30} />
                        <img src={threeDot} width={30} className="dot-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkAndEducation