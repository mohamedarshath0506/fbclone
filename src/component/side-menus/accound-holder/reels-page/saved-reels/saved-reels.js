import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

function SavedReels() {

    const [savedReels, setSavedReels] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:3002/savedReels');
            setSavedReels(response.data)
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
        }, []);
    console.log("savedReels", savedReels);

    return (
        <div className="your-photos-container">
            {savedReels.map((video) => (
                <video width={260} height={146} controls autoPlay style={{borderRadius: "10px"}}>
                    <source src={video.videoUrl} type="video/mp4"/>
                </video>
            ))}           
        </div>   
    )
}

export default SavedReels;