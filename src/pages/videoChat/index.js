import React, { useContext } from 'react';

import { SocketContext } from '../../utils/context';



const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div >
      {stream && (
        <div>
          <div >
            <p >{name || 'Name'}</p>
            <video playsInline muted ref={myVideo} autoPlay />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <div >
            <p >{call.name || 'Name'}</p>
            <video playsInline ref={userVideo} autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
