import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import thondiCity from "../../../../../../../image/thondi-city.jpg"

function BooksAndRead() {
    return (
        <div>
            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Books</p>
                </div>
                <div className="recent-content" style={{paddingLeft: "10px"}}>
                    <NavLink to="/accountDetails/booksAndRead/readBooks" style={{textDecoration:"none"}}><p>Read</p></NavLink>
                    <NavLink to="/accountDetails/booksAndRead/booksRead" style={{textDecoration:"none"}}><p>Books</p></NavLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>

            <div className="checkIns-container">
                <div className="check-ins-header">
                    <p>Apps and games</p>
                </div>
                <div className="recent-content">
                    <p>Apps and Games</p>
                </div>
                <div style={{textAlign: "left"}}>
                   <img src={thondiCity} width={162} height={162} style={{borderRadius: "10px"}} />
                   <p style={{fontSize: "15px",fontWeight: 600, color: "#050505"}}>Merdekagame</p>
                </div>
            </div>
        </div>   
    )
}

export default BooksAndRead;