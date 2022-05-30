import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className="header">
        <IconButton>
           <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
       

       <IconButton>
          <img 
       className="header_logo"
       src="https://p.kindpng.com/picc/s/19-195266_tinder-icon-2017-logo-vector-gradient-tinder-logo.png"

       alt=""
       />

       </IconButton>
       
      <IconButton>
           <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
       

    </div>
  )
}

export default Header