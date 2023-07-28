import "./fb-header.css"
import message from "../image/message.png"
import bell from "../image/bell.png"
import search from "../image/search.png"
import black from "../image/black.jpg"

function FbHeader() {
    return(
        <div className="fb-clone-container">
            <div className="container">
                <div className="header">
                    <h1>fbclone</h1>
                </div>
                <div className="search-bar">
                    <img src={search} className="search-icon" />
                    <input type="text" placeholder="Search Fbclone" />
                </div>
                <div className="fb-icons">
                    <div className="tooltip">
                        <img src={message} width={20} className="fb-icon-img" />
                        <p className="tooltiptext">messenger</p>
                    </div>
                    <div className="tooltip">
                        <img src={bell} width={20} className="fb-icon-img" />
                        <p className="tooltiptext">Notifications</p>
                    </div>
                    <div className="tooltip">
                        <img src={black} width={35} className="fb-icon-account-holder" />
                        <p className="tooltiptext">Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FbHeader