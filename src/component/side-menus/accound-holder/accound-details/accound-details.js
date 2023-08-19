import accountdp from "../../../../image/accountdp.jpg"
import create from "../../../../image/create.png"
import camera from "../../../../image/camera.png"
import black from "../../../../image/black.jpg"
import down from "../../../../image/down.png"
import add from "../../../../image/add.png"
import edit from "../../../../image/edit.png"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MusicArtists from "../more/music-artists/music-artists"

function AccountDetails() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div className="menu-1">
            <div className="account-details-container">
                <div className="account-container">
                    <img src={accountdp} width={1350} height={500}/>
                    <div className="create-position">
                        <p className="create-with-avatar"><img src={create} width={30} />Create With Avatar</p>
                    </div>
                    <div className="camera-position">
                        <p className="create-with-avatar"><img src={camera} width={30} />EditCover Photo</p>
                    </div> 
                </div>
                <div>
                    <div className="account-holder-details">
                        <img src={black} width={200} />
                        <h2>Mohamed Arshath</h2>
                    </div>
                    <div className="add-to-container">
                        <button className="addto-story"><img src={add} />Add to story</button>
                        <button className="edit-profil"><img src={edit} />Edit profil</button>
                        <button className="down"><img src={down} width={20}/></button>
                    </div>
                </div>
                <hr/>
                <div>
                    <nav>
                    <div className="section-page">
                        <NavLink to="/accountDetails/postPage" className="select">Posts</NavLink>
                        <NavLink to="/accountDetails/about" className="select">About</NavLink>
                        <NavLink to="/accountDetails/friends" className="select">Friends</NavLink>
                        <NavLink to="/accountDetails/photos" className="select">Photos</NavLink>
                        <NavLink to="/accountDetails/video" className="select">Videos</NavLink>
                        <NavLink to="/accountDetails/reelPage" className="select">Reels</NavLink>
                        <NavLink><FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">more</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="" style={{width: "330px"}}><em>None</em></MenuItem>
                            <NavLink to="/accountDetails/checkIns" style={{textDecoration: "none"}}><MenuItem value={10} style={{width: "330px", fontSize: "15px", color: "#000"}}>Check-ins</MenuItem></NavLink>
                                <MenuItem value={20}>Sports</MenuItem>
                            <NavLink to="/accountDetails/musicArtists" style={{textDecoration: "none"}}><MenuItem value={30} style={{width: "330px", fontSize: "15px", color: "#000"}}>Music</MenuItem></NavLink>
                            <NavLink to="/accountDetails/movies" style={{textDecoration: "none"}}><MenuItem value={40} style={{width: "330px", fontSize: "15px", color: "#000"}}>Movies</MenuItem></NavLink>
                            <NavLink to="/accountDetails/watchedTvShows" style={{textDecoration: "none"}}><MenuItem value={50} style={{width: "330px", fontSize: "15px", color: "#000"}}>TV shows</MenuItem></NavLink>
                                <MenuItem value={60}>Books</MenuItem>
                                <MenuItem value={70}>Apps and games</MenuItem>
                                <MenuItem value={80}>Likes</MenuItem>
                                <MenuItem value={90}>Events</MenuItem>
                                <MenuItem value={100}>Reviews given</MenuItem>
                                <MenuItem value={110}>Groups</MenuItem>
                                <MenuItem value={120}>Manage sections</MenuItem>
                            </Select>
                        </FormControl></NavLink>
                    </div>
                    </nav>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default AccountDetails;