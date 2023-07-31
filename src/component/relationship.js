import addwork from "../image/add-work.png"
import edit from "../image/edit.png"
import earth from "../image/earth.png"
import heart from "../image/heart.png"

function Relationship() {
    return (
        <div className="addwork-container">
            <div className="school-content">
                <h3>Relationship</h3>
                <div className="location-detail-content">
                    <div className="degree">
                        <div>
                            <img src={heart} width={30} />
                        </div>
                    <div className="school-name">
                        <span>In an open relationship</span>
                    </div>
                </div>
                <div className="three-dot">
                    <img src={earth} width={30} />
                    <img src={edit} width={30} className="dot-icon" />
                </div>
            </div>
                <h3>Family members</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add family member</p>
                </div>
            </div>
        </div>
    )
}

export default Relationship