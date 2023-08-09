import "./fb-header.css"
import message from "../image/message.png"
import bell from "../image/bell.png"
import search from "../image/search.png"
import black from "../image/black.jpg"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function FbHeader() {

    
    // const itemList = [
    //     "Apple",
    //     "Orange",
    //     "Banana",
    //     "Cherry",
    //     "Milk",
    //     "Peanuts",
    //     "Butter",
    //     "Tomato"
    //   ];
    
    //   const [filteredList, setFilteredList] = new useState(itemList);

    //   const filterBySearch = (event) => {
    //     const query = event.target.value;
    //     var updatedList = [...itemList];
    //     updatedList = updatedList.filter((item) => {
    //       return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    //     });
    //     setFilteredList(updatedList);
    //   };
    //   console.log("filteredList", filteredList);
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