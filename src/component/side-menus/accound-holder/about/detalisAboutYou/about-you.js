import addwork from "../../../../../image/add-work.png"

function AboutYou() {
    return (
        <div>
            <div className="school-content">
                    <h3>About you</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Write some details about yourself</p>
                </div>
                    <h3>Name pronunciation</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add a name pronunciation</p>
                </div>
                    <h3>Other names</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add a nickname, a birth name...</p>
                </div>
                    <h3>Favorite quotes</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Add your favorite quotations</p>
                </div>
                    <h3>Blood donations</h3>
                <div className="school-are-college-place">
                    <img src={addwork} width={50} />
                    <p>Learn about blood donations</p>
                </div>
            </div>
        </div>
    )
}

export default AboutYou;