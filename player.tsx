'use client'

import ReactPlayer from 'react-player';
import React from 'react';

const VideoPlayerComponent: React.FC = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url='https://youtu.be/X5zQD-aoFgE' 
        className='react-player'
        playing
        width='100%'
        height='750px'
        loop
        playsinline
      />
    </div>
  );
};

export default VideoPlayerComponent;