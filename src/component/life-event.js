import addwork from "../image/add-work.png"
import star from "../image/star.png"

function LifeEvent() {
    return (
        <div>
             <div className="school-content">
                    <h3>Life events</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add a life event</p>
                </div>
                <div className="school-are-college-place">
                    <img src={star} width={50} />
                    <p>No life events to show</p>
                </div>
            </div>
        </div>
    )
}

export default LifeEvent