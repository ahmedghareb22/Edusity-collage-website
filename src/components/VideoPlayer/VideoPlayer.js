import { useRef } from 'react';
import './VideoPlayer.css';
import aboutVideo from '../../assets/About/collage-vedio.mp4'


const VideoPlayer = ({playVideo, setPlayVideo}) => {
  const theVideo = useRef()
  function closeVideo(event){
    if(event.target !== theVideo.current) 
      setPlayVideo(false)
  }

  return (
    <div className={playVideo? 'video-player' : 'video-player hide'} onClick={closeVideo}>
      <video ref={theVideo} src={aboutVideo} autoPlay controls muted></video>
    </div>
  );
}

export default VideoPlayer;