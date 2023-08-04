import { useState, useEffect } from "react"
import axios from "axios";

function Stories() {

    const [stories, setStories] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3003/stories');
            setStories(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
    return (
        <div className="stories-reels-rooms-page">
            {stories?.map((storie) => (
                <div className="stories-container" >
                    <div className="stories-icons">
                        <img src={storie.img} alt="API Image"  width={20} height={20} />
                    </div>                        
                    <img src={storie.img} alt="API Image"  width={200} height={300} />
                    <p className="stories-name">{storie.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Stories