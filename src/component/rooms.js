import video from "../image/video.svg"
import i from "../image/i.png"
import friends from "../image/friends.png"
import people from "../image/people.png"

function Rooms() {
    return(
        <div>
             {/* <div className="i-container">
                    <img src={i} width={15} height={15} className="i-icon" />
                </div> */}
             <div className="stories-reels-rooms-page">
                <div>
                    <img src={i} width={15} height={15} className="i-icon" />
                </div>
               {/* <div> */}
               <div>
                    <div className="create-container">
                        <img src={video} width={40}  />
                        <h4>Mohamed Room</h4>
                        <p>Get started</p>
                        <button className="create-button">Create</button>
                    </div>
                </div>
                    <div>
                        <div className="friend-content friend">
                            <img src={friends} />
                            <p>Have live audio conversations or video chat with friends.</p>
                        </div>
                        <div className="friend-content">
                            <img src={friends} />
                            <p>Control who and when can join you in your room.</p>
                        </div>
                        <div className="friend-content">
                            <img src={people} width={30} />
                            <p>People without a Facebook account can join with a link.</p>
                        </div>
                    </div>
               {/* </div> */}
            </div>
        </div>
    )
}

export default Rooms