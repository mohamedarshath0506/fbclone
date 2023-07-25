import login from "../image/login.png"
import { NavLink } from "react-router-dom"
import reels from "../image/reels.svg"
import stories from "../image/stories.svg"
import video from "../image/video.svg"
import { Outlet } from "react-router-dom"
import photosvideos from "../image/photosvideos.png"
import smile from "../image/smile.png"
import black from "../image/black.jpg"
import like from "../image/like.png"
import comment from "../image/comment.png"
import share from "../image/share.png"
import multiple from "../image/multiple.png"
import photo from "../image/photo-1522770179533-24471fcdba45.jpeg"


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
                    <div className="like-comment-share-btn">

                        <div className="content like-content">
                            <img src={like} width={30} />
                            <p>Like</p>
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
                    <div className="like-comment-share-btn">
                        <div className="content like-content">
                            <img src={like} width={30} />
                            <p>Like</p>
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



                {/* <div>
            <div className="stories-reels-rooms-page">

                <div className="stories-container" >
                    <div className="stories-icons">
                        
                    </div>
                    
                    <p className="stories-names">Arshath</p>
                </div>

                <div className="stories-container">
                    <div className="stories-icons">
                      
                    </div>
                   
                    <p className="stories-names">Arshath</p>
                </div>

                <div className="stories-container">
                    <div className="stories-icons">
                      
                    </div>
                   
                    <p className="stories-names">Arshath</p>
                </div>

                <div className="stories-container">
                    <div className="stories-icons">
                      
                    </div>
                   
                    <p className="stories-names">Arshath</p>
                </div>

                <div className="stories-container">
                    <div className="stories-icons">
                        
                    </div>
                    
                    <p className="stories-names">Arshath</p>
                </div>

                <div className="stories-container">
                    <div className="stories-icons">
                        
                    </div>
                   
                    <p className="stories-names">Arshath</p>
                </div>

                <div className="stories-container">
                    <div className="stories-icons">
                       
                    </div>
                   
                    <p className="stories-names">Arshath</p>
                </div>

                <div className="stories-container">
                    <div className="stories-icons">
                        
                    </div>
                  
                    <p className="stories-names">Arshath</p>
                </div>
                
            </div>
        </div> */}








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
                    <div className="like-comment-share-btn">
                        <div className="content like-content">
                            <img src={like} width={30} />
                            <p>Like</p>
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
                    <div className="like-comment-share-btn">
                        <div className="content like-content">
                            <img src={like} width={30} />
                            <p>Like</p>
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
                    <div className="like-comment-share-btn">
                        <div className="content like-content">
                            <img src={like} width={30} />
                            <p>Like</p>
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