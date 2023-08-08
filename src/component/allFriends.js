import { useState } from "react"
import camera from "../image/camera-man.jpeg"
import { useEffect } from "react";
import axios from "axios";

function AllFriends() {


    const [stories, setStories] = useState([])
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3002/allFriend');
          setStories(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
   console.log("stories", stories);
    return (
    
        <div>
            {stories.map((data) => {
               return <div className="friend-requests-container">
                    <div className="friend-requests-content">
                        <div className="friends">
                            <img src={data.img} width={90} height={100}/>
                        </div>
                        <div className="friends-name">
                            <h3>{data.name}</h3>
                            <p>1 mutual friend</p>
                        </div>
                    </div>
                    <div className="friend-requests-content">
                        <div className="friends">
                            <img src={data.img} width={90} height={100}/>
                        </div>
                        <div className="friends-name">
                            <h3>{data.name}</h3>
                            <p>1 mutual friend</p>
                        </div>
                    </div>
                        </div>
                        })}
                        
        </div>
                      
       
    )
}

export default AllFriends