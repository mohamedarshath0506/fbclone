import like from "../../../../image/like.png"
import comment from "../../../../image/comment.png"
import share from "../../../../image/share.png"
import multiple from "../../../../image/multiple.png"
import cameraMan from "../../../../image/camera-man.jpeg"
import threeDot from "../../../../image/three-dot.png"
import { useState, useEffect } from "react"
import axios from "axios"
import Icons from "../../../icons"

// import * as React from 'react';
// import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import { Modal } from '@mui/base/Modal';

function Page() {

    const [post, setPost] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/post')
                setPost(response.data)
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])

    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(anchorEl ? null : event.currentTarget);
    // };

    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popper' : undefined;

    const [opens, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: '12px',
  padding: '16px 15px 10px 15px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

const TriggerButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 6px 12px;
  line-height: 1.5;
  background: transparent;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[100] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);

    return(
        <div className="hover-container">
            <div className="post-page">
                {post?.map((post) => (
                    <div className="post">
                
                        <div className="profil-post-page">
                            <div className="profil">
                                <img src={cameraMan} alt="cameraMan" width={30} height={30} />
                                <p>{post.name}</p>
                            </div>
                            <div className="close-page">
                                <img src={threeDot} alt="threeDot" width={20} />
                                <img src={multiple} alt="multiple" width={20} />
                            </div>
                        </div>
                        <div>
                            <img src={post.img} alt="post" width={818} height={500} />
                        </div>
                        <hr />
                        <hr />
                        <div className="like-comment-share-btn">
                            <div className="content like-content icons-container">
                                <img src={like} alt="like" width={30} />
                                <p>Like</p> 
                                <Icons />
                            </div>
                            <div className="content comment-content" onClick={handleOpen} >
                                <img src={comment} alt="comment" width={30} />
                                <p>Comment</p>
                            </div>
                            <div className="content share-content">
                                <img src={share} alt="share" width={30}/>
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={opens}
                    onClose={handleClose}
                    slots={{ backdrop: StyledBackdrop }}
                >
                    <Box sx={style}>
                        <h2 id="unstyled-modal-title">Text in a modal</h2>
                        <input type="text" id="unstyled-modal-description" style={{width: "375px", height: "40px", padding: "5px", borderRadius: "10px", border: "none", background: "#F0F2F5"}}/>
                    </Box>
                </StyledModal>
            </div>

        </div>
    )
}

export default Page;