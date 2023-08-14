import { useState, useEffect } from "react"
import axios from "axios"
import Manage from "../image/settings.png"
import phone from "../image/phone.png"
import video from "../image/video.svg"
import threeDot from "../image/three-dot.png"
import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';


function Messenger() {

    const [message, setMessage] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3002/messenger');
            setMessage(response.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
      

      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;

    return(
        <div className="messenger-contacts-container">
            <div className="messenger-contacts">
                <h3>Chats</h3>
                <div className="contacts-details">
                    
                </div>
            </div>
            <div >
                <input type="text" placeholder="Search Messenger" style={{width: 240, borderRadius: "10px", background: '#F0F2F5', border: "none", padding: '10px' }} />
            </div>
            {message.map((profile) => {
               return <div className="contacts-messenger menu-contacts-messenger" aria-describedby={id} type="button" onClick={handleClick}>
                    <img src={profile.profile} width={20} height={20} style={{borderRadius: "10px"}} />
                    <p>{profile.name}</p>
                </div>
            })}
                {/* <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box sx={{ bgcolor: '#fff', borderRadius: "10px", width: "338px", height: "439px" }}>
                        <div>
                            <div style={{display: "flex", justifyContent: "space-between", padding: "10px"}}>
                                <div style={{display: "flex", justifyContent: "flex-start"}}>
                                    <img src={Manage} width={20} height={20} />
                                    <p style={{margin: 0}}>Arshath</p>
                                </div>
                                <div style={{display:"flex", gap: "15px"}}>
                                    <img src={phone} width={20} />
                                    <img src={video} width={20} />
                                    <img src={threeDot} width={20} />
                                </div>
                            </div>
                            <div>
                                Arshath
                            </div>
                        </div>
                    </Box>
                </Popper> */}
        </div>
    )
}

export default Messenger