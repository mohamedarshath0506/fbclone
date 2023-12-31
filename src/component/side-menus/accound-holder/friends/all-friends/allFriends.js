import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import threeDot from "../../../../../image/three-dot.png"

function AllFriends() {


    const [allFriends, setAllFriends] = useState([])
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3002/allFriend');
          setAllFriends(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
   console.log("allFriends", allFriends);
    return (
    
        <div className="friend-requests-items">
            {allFriends.map((data) => {
            return <div className="friend-requests-container">
                        <div className="friend-requests-content">
                            <div className="friends">
                                <img src={data.img} width={90} height={100}/>
                            </div>
                            <div className="point">
                                <div className="friends-name">
                                    <h3>{data.name}</h3>
                                    <p>1 mutual friend</p>
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

export default AllFriends;