import "../fb-header.css"
import message from "../../image/message.png"
import bell from "../../image/bell.png"
import search from "../../image/search.png"
import black from "../../image/black.jpg"
import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Messenger from "../messenger"
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import { Badge, badgeClasses } from '@mui/base/Badge';
import { grey } from "@mui/material/colors"
import { useState } from "react"


function FbHeader() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

  const StyledBadge = styled(Badge)(
    ({ theme }) => `
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    list-style: none;
    font-family: IBM Plex Sans, sans-serif;
    position: relative;
    display: inline-block;
    line-height: 1;
  
    & .${badgeClasses.badge} {
      z-index: 999;
      position: absolute;
      top: 0;
      right: 16px;
      min-width: 22px;
      height: 22px;
      padding: 0;
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;
      white-space: nowrap;
      text-align: center;
      border-radius: 12px;
      background: blue;
      box-shadow: 0px 4px 6x ${theme.palette.mode === 'dark' ? grey : grey};
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    }
  
    & .${badgeClasses.invisible} {
      display: none;
    }
    `,
  );

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log("inputValue", inputValue);

// const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     const filtered = data.filter(item =>
//       item.toLowerCase().includes(query.toLowerCase())
//     );

//     setFilteredData(filtered);
//   };


    return (
        <div className="fb-clone-container">
            <div className="container">
                <div className="header">
                    <h1>fbclone</h1>
                </div>
                <div className="search-bar">
                    <img src={search} className="search-icon" />
                    <input type="text" placeholder="Search Fbclone" onChange={handleInputChange} />
                    
                </div>
                <div className="fb-icons">
                    <div className="tooltip" aria-describedby={id} type="button" onClick={handleClick}>
                        <img src={message} width={31} className="fb-icon-img" /> 
                        <p className="tooltiptext">messenger</p>
                        
                    </div>
                    <Stack spacing={4} direction="row">
                        <StyledBadge badgeContent={0} >
                            <div className="tooltip" aria-describedby={id} type="button" >
                                <img src={bell} width={31} className="fb-icon-img" />
                                <p className="tooltiptext">Notifications</p>
                            </div>
                        </StyledBadge>
                    </Stack>
                    <div className="tooltip">
                        
                        <img src={black} width={45} className="fb-icon-account-holder" />
                        <p className="tooltiptext">Account</p>
                    </div>
                </div>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ bgcolor: 'background.paper', marginTop: "20px", borderRadius: "10px", height: "800px",overflowY:" scroll" }}>
                    <Messenger />
                </Box>
            </Popper>
        </div>
    )
}

export default FbHeader;