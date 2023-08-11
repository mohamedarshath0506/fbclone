import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

function YourPhotos() {

    const [yourPhotos, setYourPhotos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(' http://localhost:3002/yourPhotos');
            setYourPhotos(response.data)
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
        }, []);
    console.log("yourPhotos", yourPhotos);

    return (
        <div className="your-photos-container">
            {yourPhotos.map((photo) => {
            return  <div >
                        <img src={photo.img} width={185} height={200} style={{borderRadius:"10px"}}/>
                    </div>
            })}           
        </div>   
    )
}

export default YourPhotos;