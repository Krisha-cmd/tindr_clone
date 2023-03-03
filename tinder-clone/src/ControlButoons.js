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
        <IconButton >
            <ReplayIcon className='controlButRepeat' fontSize='large'/>
        </IconButton>
        <IconButton >
            <CloseIcon className='controlButClose' fontSize='large'/>
        </IconButton>
        <IconButton >
            <StarRateIcon className='controlButStar' fontSize='large'/>
        </IconButton>
        <IconButton >
            <FavoriteIcon className='controlButFav' fontSize='large'/>
        </IconButton>
        <IconButton >
            <FlashOnIcon className='controlButFlash' fontSize='large'/>
        </IconButton>

    </div>
  );
}
export default ControlButoons