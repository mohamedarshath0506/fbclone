import "./fb-header.css"
import message from "../image/message.png"
import bell from "../image/bell.png"
import search from "../image/search.png"
import login from "../image/login.png"
import black from "../image/black.jpg"


function FbHeader() {
    return(
        <div>
            <div className="fb-clone-container">
                <h1>fbclone</h1>
                <div className="search-bar">
                    <img src={search} className="search-icon" />
                    <input type="text" placeholder="Search Fbclone" />
                </div>
                <div className="fb-icons">
                    <div className="tooltip">
                        <img src={message} width={35}  />
                        <p className="tooltiptext">messenger</p>
                    </div>
                    <div className="tooltip">
                        <img src={bell} width={35} />
                        <p className="tooltiptext">Notifications</p>
                    </div>
                    <div className="tooltip">
                        <img src={black} width={35} />
                        <p className="tooltiptext">Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FbHeader