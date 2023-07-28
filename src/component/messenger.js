import video from "../image/video.svg"
import search from "../image/search.png"
import likes from "../image/like.gif"
import addfriend from "../image/add-friend.png"
import accountdp from "../image/accountdp.jpg"
import bell from "../image/bell.png"
import home from "../image/home.png"

function Messenger() {
    return(
        <div className="messenger-contacts-container">
            <div className="messenger-contacts">
                <h3>Contacts</h3>
                <div className="contacts-details">
                    <img src={video} width={20} />
                    <img src={search} width={20} />
                    <p>...</p>
                </div>
            </div>
            <div className="contacts-messenger menu-contacts-messenger">
                <img src={likes} width={20} />
                <p>Arshath</p>
            </div>
            <div className="contacts-messenger menu-contacts-messenger">
                <img src={addfriend} width={20} />
                <p>Nusaim</p>
            </div>
            <div className="contacts-messenger menu-contacts-messenger">
                <img src={accountdp} width={20} />
                <p>Afiyal</p>
            </div>
            <div className="contacts-messenger menu-contacts-messenger">
                <img src={bell} width={20} />
                <p>Afiyath</p>
            </div>
            <div className="contacts-messenger menu-contacts-messenger">
                <img src={home} width={20} />
                <p>Lameen</p>
            </div>
        </div>
    )
}

export default Messenger