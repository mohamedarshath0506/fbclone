import right from "../../../../image/right.png"
import securitylock from "../../../../image/security-lock.png"
import lives from "../../../../image/lives.png"
import location from "../../../../image/location.png"
import heart from "../../../../image/heart.png"
import video from "../../../../image/video.svg"
import black from "../../../../image/black.jpg"
import photosvideos from "../../../../image/photosvideos.png"
import flag from "../../../../image/flag.png"
import filters from "../../../../image/filters.png"
import Manage from "../../../../image/settings.png"
import list from "../../../../image/list.png"
import seeall from "../../../../image/seeall.png"
import multiple from "../../../../image/multiple.png"
import like from "../../../../image/like.png"
import likes from "../../../../image/like.gif"
import love from "../../../../image/love.gif"
import care from "../../../../image/care.gif"
import haha from "../../../../image/haha.png"
import wow from "../../../../image/wow.png"
import sad from "../../../../image/sad.gif"
import angry from "../../../../image/angry.png"
import comment from "../../../../image/comment.png"
import share from "../../../../image/share.png"

function PostsPage() {
    return (
        <div className="intro-container ">
            <div>
                <div className="postspage-content">
                    <div>
                        <h3>Account Restricted</h3>
                        <p>Only you can see this</p>
                    </div>
                    <div>
                        <img src={right} width={30} />
                    </div>
                </div>
                <div className="securitylock-container">
                    <div className="securitylock-content">
                        <img src={securitylock} width={30} />
                        <div className="locked-your-profile">
                            <h3>You locked your profile</h3>
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
                <div className="intro-content">
                    <h1>Intro</h1>
                        <button className="add-bio">Add bio</button>
                    <div className="live-content">
                        <img src={lives} width={30} />
                        <p>Lives in <b>Chennai, India</b></p>
                    </div>
                    <div className="live-content"> 
                        <img src={location} width={30} />
                        <p>From <b>Chrompet, Tamil Nadu, India</b></p>
                    </div>
                    <div className="live-content">
                        <img src={heart} width={30} />
                        <p>In an open relationship</p>
                    </div>
                    <div className="editing-btn">
                        <button className="add-bio">Edit details</button>
                        <button className="add-bio">Add hobbies</button>
                        <button className="add-bio">Add featured</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="live-even-container">
                    <div className="mind-content">
                        <img src={black} width={50} />
                        <input type="text" placeholder="What's on your mind, Mohamed?" />
                    </div>
                        <hr className="live-line"/>
                    <div className="feeling-container">
                        <div className="your-mind-container menu-contsiner">
                            <img src={video} width={30} />
                            <p>Live Video</p>
                        </div>  
                        <div className="your-mind-container menu-contsiner">
                            <img src={photosvideos} width={30} />
                            <p>photos/videos</p>
                        </div>
                        <div className="your-mind-container menu-contsiner">
                            <img src={flag} width={30} />
                            <p>Life/event</p>
                        </div>
                    </div>
                </div>
                <div className="live-even-container">
                    <div className="live-even-content">
                        <div>
                            <h3>Posts</h3>
                        </div>
                        <div className="filters-manage-btn">
                            <button className="filters"><img src={filters} width={30} />Filters</button>
                            <button className="filters"><img src={Manage} width={30} />Manage posts</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="view-container">
                        <button className="view-btn"><img src={list} width={20} />List view</button>
                        <button className="view-btn"><img src={seeall} width={20} />Grid view</button>
                    </div>
                </div>
                    <div className="post ">
                    <div className="profil-post-page">
                        <div className="profil">
                            <img src={photosvideos} width={35} />
                            <p>Arshath</p>
                        </div>
                        <div className="close-page">
                            <h1>...</h1>
                            <img src={multiple}width={20} />
                        </div>
                    </div>
                   
                    <hr />
                    <hr />
                    <div className="like-comment-share-btn">
                        <div className="content like-content icons-container">
                            <img src={like} width={30} />
                            <p>Like</p>
                            <div className="icons-content">
                                <div className="like-icon">
                                    <p className="like-page">like</p>
                                    <img src={likes} width={40}  />
                                </div>
                                <div className="like-icon">
                                    <p className="like-page">love</p>
                                <img src={love} width={40} />
                                </div>
                                <div className="like-icon">
                                    <p className="like-page">card</p>
                                <img src={care} width={40} />
                                </div>
                                <div className="like-icon">
                                    <p className="like-page">haha</p>
                                <img src={haha} width={40} />
                                </div>
                                <div className="like-icon">
                                    <p className="like-page">wow</p>
                                <img src={wow} width={40} />
                                </div>
                                <div className="like-icon">
                                    <p className="like-page">sad</p>
                                <img src={sad} width={40} />
                                </div>
                                <div className="like-icon">
                                    <p className="like-page">angry</p>
                                <img src={angry} width={40} />
                                </div>
                            </div>
                        </div>
                        <div className="content comment-content">
                            <img src={comment} width={30} />
                            <p>Comment</p>
                        </div>
                        <div className="content share-content">
                            <img src={share} width={30}/>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostsPage;