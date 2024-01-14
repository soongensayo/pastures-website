'use client'

// Import ReactPlayer
import ReactPlayer from 'react-player';
import React from 'react';



const VideoPlayerComponent: React.FC = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=RoJPdl7JCEE' // Replace with your video URL
        className='react-player'
        playing
        width='100%'
        height='1000px'
      />
    </div>
  );
};

export default VideoPlayerComponent;