import likes from "../image/like.gif"
import love from "../image/love.gif"
import care from "../image/care.gif"
import wow from "../image/wow.png"
import haha from "../image/haha.png"
import sad  from "../image/sad.gif"
import angry from "../image/angry.png"

function Icons() {
    return (
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
    )
}

export default Icons