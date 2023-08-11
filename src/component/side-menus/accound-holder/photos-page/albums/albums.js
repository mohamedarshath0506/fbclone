import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

function Albums() {

    const [albums, setAlbums] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(' http://localhost:3002/albums');
            setAlbums(response.data)
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
        }, []);
    console.log("setAlbums", setAlbums);

    return (
        <div className="photos-content">
            <div className="albums-container">
                <div className="albums-content">
                    <h1>+</h1>
                </div>
                <p>Create Albums</p>
            </div>
            {albums.map((photo) => {
            return  <div>
                        <div>
                            <img src={photo.img} width={200} height={200} style={{borderRadius:"10px"}}/>
                        </div>
                        <p className="album-profile">{photo.profile}</p>
                        <p className="album-item">{photo.item}</p>
                    </div>
            })}           
        </div>   
    )
}

export default Albums;