import accountdp from "../image/accountdp.jpg"
import create from "../image/create.png"
import camera from "../image/camera.png"

function AccountDetails() {
    return(
        <div className="account-details-container">
            <div className="account-container">
                <img src={accountdp} width={1350} />
                <div className="create-position">
                    <p className="create-with-avatar"><img src={create} width={30} />Create With Avatar</p>
                </div>
                <div className="camera-position">
                    <p className="create-with-avatar"><img src={camera} width={30} />EditCover Photo</p>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails