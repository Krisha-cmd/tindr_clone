import React from 'react';
import "./ControlButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function ControlButoons() {
  return (
    <div className='controlButtons'>
        <IconButton className='controlButRepeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='controlButClose'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='controlButStar'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className='controlButFav'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='controlButFlash'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>

    </div>
  );
}
export default ControlButoons