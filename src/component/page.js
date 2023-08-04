import like from "../image/like.png"
import comment from "../image/comment.png"
import share from "../image/share.png"
import multiple from "../image/multiple.png"
import cameraMan from "../image/camera-man.jpeg"
import threeDot from "../image/three-dot.png"
import { useState, useEffect } from "react"
import axios from "axios"
import Icons from "./icons"

function Page() {

    const [post, setPost] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3003/post')
                setPost(response.data)
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])
    return(
        <div className="hover-container">
            <div className="post-page">
                {post?.map((post) => (
                    <div className="post">
                
                        <div className="profil-post-page">
                            <div className="profil">
                                <img src={cameraMan} width={30} height={30} />
                                <p>{post.name}</p>
                            </div>
                            <div className="close-page">
                                <img src={threeDot} width={20} />
                                <img src={multiple}width={20} />
                            </div>
                        </div>
                        <div>
                            <img src={post.img} width={818} height={500} />
                        </div>
                        <hr />
                        <hr />
                        <div className="like-comment-share-btn">
                            <div className="content like-content icons-container">
                                <img src={like} width={30} />
                                <p>Like</p> 
                                <Icons />
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
                ))}
            </div>
        </div>
    )
}

export default Page