import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

function YourVideos() {

    const [yourVideos, setYourVideos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:3002/videosUrl');
            setYourVideos(response.data)
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
        }, []);
    console.log("yourVideos", yourVideos);

    return (
        <div className="your-photos-container">
            {yourVideos.map((video) => (
                <video width={260} height={146} controls autoplay style={{borderRadius: "10px"}} >
                    <source src={video.videoUrl} type="video/mp4"/>
                    <source src={video.videoUrl} type="video/ogg" />
                </video>
            ))}        
        </div>   
    )
}

export default YourVideos;