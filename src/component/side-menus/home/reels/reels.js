import { useEffect, useState } from "react"
import axios from "axios"

function Reels() {

    const [reels, setReels] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/reels')
                setReels(response.data)
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <div className="stories-reels-rooms-page">
                {reels?.map((reel) => (
                    <div className="stories-container" >
                    <div className="stories-icons">
                        <img src={reel.img} alt="reel" width={20} height={20} />
                    </div>
                    <img src={reel.img} alt="reel" width={150} height={300} />
                    <p className="stories-name">{reel.name}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Reels;