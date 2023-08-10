import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

function PhotosOfYou() {

    const [photosOfYou, setPhotosOfYou] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:3002/photosOfYou');
            setPhotosOfYou(response.data)
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
        }, []);
    console.log("photosOfYou", photosOfYou);

    return (
        <div className="photos-content">
            {photosOfYou.map((photo) => {
            return  <div >
                        <img src={photo.img} width={185} height={200} style={{borderRadius:"10px"}}/>
                    </div>
            })}           
        </div>   
    )
}

export default PhotosOfYou