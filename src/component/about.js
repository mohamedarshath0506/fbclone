import { NavLink, Outlet } from "react-router-dom"

function About() {
    return (
            <div className="about-container">
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
                <div className="abc">
                   <Outlet />
                </div>
            </div>
    )
}

export default About