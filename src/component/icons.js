import likes from "../image/like.gif"
import love from "../image/love.gif"
import care from "../image/care.gif"
import wow from "../image/wow.png"
import haha from "../image/haha.png"
import sad  from "../image/sad.gif"
import angry from "../image/angry.png"
import { useState } from "react"

function Icons() {

    const [icons, setIcons] = useState([
        {lable: "Like"},
        {lable: "Love"},
        {lable: "Care"},
        {lable: "Haha"},
        {lable: "Wow"},
        {lable: "Sad"},
        {lable: "Angry"}
    ])
    console.log("icons", icons);

    const handleClick = () => {
        setIcons()
    }
    return (
        <div className="icons-content">
            <div className="like-icon">
                <p className="like-page">like</p>
                <img src={likes} width={40} alt="like" onClick={() => {
                   handleClick()
                }}/>
            </div>
            <div className="like-icon">
                <p className="like-page">love</p>
                <img src={love} alt="love" width={40} />
            </div>
            <div className="like-icon">
                <p className="like-page">card</p>
                <img src={care} alt="care" width={40} />
            </div>
            <div className="like-icon">
                <p className="like-page">haha</p>
                <img src={haha} alt="haha" width={40} />
            </div>
            <div className="like-icon">
                <p className="like-page">wow</p>
                <img src={wow} alt="wow" width={40} />
            </div>
            <div className="like-icon">
                <p className="like-page">sad</p>
                <img src={sad} alt="sad" width={40} />
            </div>
            <div className="like-icon">
                <p className="like-page">angry</p>
                <img src={angry} alt="angry" width={40} />
            </div>
        </div>
    )
}

export default Icons