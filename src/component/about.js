import { NavLink, Outlet } from "react-router-dom"
import addwork from "../image/add-work.png"
import edit from "../image/edit.png"
import phone from "../image/phone.png"
import lock from "../image/lock.png"
import email from "../image/email.png"
import male from "../image/male.png"
import earth from "../image/earth.png"
import threeperson from "../image/three-person.png"
import cake from "../image/cake.png"
import ContactInfo from "./contact-info"
import heart from "../image/heart.png"
import Relationship from "./relationship"
import OverView from "./overView"
import WorkAndEducation from "./work-and-education"
import PlacesLived from "./places-lived"
import AboutYou from "./about-you"
import star from "../image/star.png"
import LifeEvent from "./life-event"

function About() {
    return (
      
            <div className="about-container">
                {/* <nav> */}
                <div className="about-content-btn">
                    <div className="about-header">
                        <h2>About</h2>     
                    </div>
                    <NavLink to="/accountDetails/about/addWorkPlace" className="about-header-title">Overview</NavLink>
                    <NavLink to='/accountDetails/about/workAndEducation' className="about-header-title">Work and education</NavLink>
                    <NavLink to="/accountDetails/about/placesLived" className="about-header-title"> Places lived</NavLink>
                    <NavLink to="/accountDetails/about/contactInfo" className="about-header-title">Contact and basic info </NavLink>
                    <NavLink to="/accountDetails/about/relationship" className="about-header-title">Family and relationships</NavLink>
                    <NavLink to="/accountDetails/about/aboutYou" className="about-header-title">Detalis about you</NavLink>
                    <NavLink to="/accountDetails/about/lifeEvent" className="about-header-title">Life events</NavLink>
                </div>
                {/* </nav> */}
                {/* <Outlet /> */}
                <div className="abc">
                   {/* <Outlet /> */}
                   <OverView />
                </div>
            </div>
    )
}

export default About