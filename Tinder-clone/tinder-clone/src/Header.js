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
       

       {/* <IconButton> */}
          <img 
       className="header_logo"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcoNUWAbUPaFpLVIqI65kvOxIrJ5yrO2oZkTHXVCA1Izznd_NE3ukXIOJB4DLYKk6HuA&usqp=CAU"

       alt=""
       />

       {/* </IconButton> */}
       
      <IconButton>
           <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
       

    </div>
  )
}

export default Header