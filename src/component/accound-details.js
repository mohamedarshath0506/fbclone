import accountdp from "../image/accountdp.jpg"
import create from "../image/create.png"
import camera from "../image/camera.png"
import black from "../image/black.jpg"
import down from "../image/down.png"
import add from "../image/add.png"
import edit from "../image/edit.png"

function AccountDetails() {
    return(
        <div className="account-details-container">
            <div className="account-container">
                <img src={accountdp} width={1350} height={500}/>
                <div className="create-position">
                    <p className="create-with-avatar"><img src={create} width={30} />Create With Avatar</p>
                </div>
                <div className="camera-position">
                    <p className="create-with-avatar"><img src={camera} width={30} />EditCover Photo</p>
                </div>
                
            </div>
            <div>
                <div className="account-holder-details">
                    <img src={black} width={200} />
                    <h2>Mohamed Arshath</h2>
                </div>
                <div className="add-to-container">
                    <button className="addto-story"><img src={add} />Add to story</button>
                    <button className="edit-profil"><img src={edit} />Edit profil</button>
                    <button className="down"><img src={down} width={20}/></button>
                </div>
            </div>
            <hr/>
            <div>
                <div className="section-page">
                    <p>Posts</p>
                    <p>About</p>
                    <p>Friends</p>
                    <p>Photos</p>
                    <p>Videos</p>
                    <p>Reels</p>
                    <p>More</p>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails