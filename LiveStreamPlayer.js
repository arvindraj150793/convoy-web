import React, { useEffect, useRef } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { webRTCConfig } from '../../config/webrtc';

const LiveStreamPlayer = ({ channel, uid, role = 'audience' }) => {
  const videoContainer = useRef(null);
  const client = useRef(null);

  useEffect(() => {
    client.current = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' });

    const joinStream = async () => {
      await client.current.join(webRTCConfig.appId, channel, null, uid);
      
      if (role === 'host') {
        const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
        await client.current.publish([audioTrack, videoTrack]);
        videoTrack.play(videoContainer.current);
      } else {
        client.current.on('user-published', async (user, mediaType) => {
          await client.current.subscribe(user, mediaType);
          if (mediaType === 'video') user.videoTrack.play(videoContainer.current);
        });
      }
    };

    joinStream();
    
    return () => client.current.leave();
  }, [channel, uid, role]);

  return <div ref={videoContainer} className="video-container" />;
};

export default LiveStreamPlayer;