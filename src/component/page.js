import reels from "../image/reels.svg"
import stories from "../image/stories.svg"
import video from "../image/video.svg"
import photosvideos from "../image/photosvideos.png"
import black from "../image/black.jpg"
import like from "../image/like.png"
import comment from "../image/comment.png"
import share from "../image/share.png"
import multiple from "../image/multiple.png"
import photo from "../image/photo-1522770179533-24471fcdba45.jpeg"
import addfriend from "../image/add-friend.png"
import cancel from "../image/cancel.png"
import likes from "../image/like.gif"
import love from "../image/love.gif"
import care from "../image/care.gif"
import wow from "../image/wow.png"
import haha from "../image/haha.png"
import sad  from "../image/sad.gif"
import angry from "../image/angry.png"

function Page() {
    return(
        <div className="hover-container">
            <div className="post-page">
                <div className="post">
                    <div className="profil-post-page">
                        <div className="profil">
                            <img src={black} width={35} />
                            <p>Arshath</p>
                        </div>

                        <div className="close-page">
                            <h1>...</h1>
                            <img src={multiple}width={20} />
                        </div>
                    </div>
                    <div>
                        <img src={black} width={795} height={500} />
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
                <div className="post">
                    <div className="profil-post-page">
                        <div className="profil">
                            <img src={reels} width={35} />
                            <p>Arshath</p>
                        </div>
                        <div className="close-page">
                            <h1>...</h1>
                            <img src={multiple}width={20} />
                        </div>
                    </div>
                    <div>
                        <img src={reels} width={795} height={500} />
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
                <div className="add-friend-request">
                    <div className="people-you-may">
                        <p>People You May Know</p>
                        <p>...</p>
                    </div>
                <div className="add-friend">
                    <div className="add-request" >
                        <div className="cancel-btn">
                            <img src={cancel}width={30} />
                        </div>
                            <img src={photo} width={230} />
                        <div>
                            <h4>Arshath</h4>
                            <div className="add-friend-btn">
                                <button><img src={addfriend} width={20} />Add Friend</button>
                            </div>
                        </div>
                    </div>
                    <div className="add-request" >
                        <div className="cancel-btn">
                            <img src={cancel}width={30} />
                        </div>
                        <img src={photo} width={230} />
                        <div>
                            <h4>Arshath</h4>
                            <div className="add-friend-btn">
                                <button><img src={addfriend} width={20} />Add Friend</button>
                            </div>
                        </div>
                    </div>
                    <div className="add-request" >
                        <div className="cancel-btn">
                            <img src={cancel}width={30} />
                        </div>
                            <img src={photo} width={230} />
                        <div>
                            <h4>Arshath</h4>
                            <div className="add-friend-btn">
                                <button><img src={addfriend} width={20} />Add Friend</button>
                            </div>
                        </div>
                    </div>
                    <div className="add-request" >
                        <div className="cancel-btn">
                            <img src={cancel}width={30} />
                        </div>
                            <img src={photo} width={230} />
                        <div>
                            <h4>Arshath</h4>
                            <div className="add-friend-btn ">
                                <button><img src={addfriend} width={20} />Add Friend</button>
                            </div>
                        </div>
                    </div>   
                </div>
                    <div className="seeall-button">
                        <button>See all</button>
                    </div>
                </div>
                <div className="post">
                    <div className="profil-post-page">
                        <div className="profil">
                            <img src={stories} width={35} />
                            <p>Arshath</p>
                        </div>
                        <div className="close-page">
                            <h1>...</h1>
                            <img src={multiple}width={20} />
                        </div>
                    </div>
                    <div>
                        <img src={stories} width={795} height={500} />
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

                <div className="post">
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
                    <div>
                        <img src={photosvideos} width={795} height={500} />
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

                <div className="post">
                    <div className="profil-post-page">
                        <div className="profil">
                            <img src={video} width={35} />
                            <p>Arshath</p>
                        </div>
                        <div className="close-page">
                            <h1>...</h1>
                            <img src={multiple}width={20} />
                        </div>
                    </div>
                    <div>
                        <img src={video} width={795} height={500} />
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

export default Page