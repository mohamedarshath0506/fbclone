import "./fb-header.css"
import message from "../image/message.png"
import bell from "../image/bell.png"
import search from "../image/search.png"
import black from "../image/black.jpg"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function FbHeader() {

    
    // const [searchTerm, setSearchTerm] = useState('');
    // console.log("searchTerm", searchTerm);
    // const [data, setData] = useState([]);
    // console.log("data", data);
    // const [isLoading, setIsLoading] = useState(false);
  
    // useEffect(() => {
    //   fetchData();
    // }, [searchTerm]);
  
    // const fetchData = async () => {
    //   if (searchTerm.trim() === '') {
    //     setData([]);
    //     return;
    //   }
  
    //   setIsLoading(true);
  
    //   try {
    //     const response = await fetch(`http://localhost:3002/post`);
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
  
    // const handleInputChange = (event) => {
    //   setSearchTerm(event.target.value);
    // };

    return (
        <div className="fb-clone-container">
            <div className="container">
                <div className="header">
                    <h1>fbclone</h1>
                </div>
                <div className="search-bar">
                    <img src={search} className="search-icon" />
                    <input type="text" placeholder="Search Fbclone" />
                    
                </div>
                <div className="fb-icons">
                    <div className="tooltip">
                        <img src={message} width={31} className="fb-icon-img" /> 
                        <p className="tooltiptext">messenger</p>
                    </div>
                    <div className="tooltip">
                        <img src={bell} width={31} className="fb-icon-img" />
                        <p className="tooltiptext">Notifications</p>
                    </div>
                    <div className="tooltip">
                        
                        <img src={black} width={45} className="fb-icon-account-holder" />
                        <p className="tooltiptext">Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FbHeader