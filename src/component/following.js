import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import threeDot from "../image/three-dot.png"

function Following() {


    const [following, setFollowing] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:3002/following');
            setFollowing(response.data)
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
        }, []);
    console.log("following", following);
    return (
    
        <div className="friend-requests-items">
            {following.map((data) => {
            return <div className="friend-requests-container">
                        <div className="friend-requests-content">
                            <div className="friends">
                                <img src={data.img} width={90} height={100}/>
                            </div>
                            <div className="point">
                                <div className="friends-name">
                                    <h3>{data.name}</h3>
                                    <p>{data.currentCity}</p>
                                </div>
                                <div>
                                    <img src={threeDot} width={30} />
                                </div>
                            </div>
                        </div>
                    </div>
            })}
                        
        </div>
                      
       
    )
}

export default Following