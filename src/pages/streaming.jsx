import React, { useState, useEffect, useRef } from "react";
import shaka from "shaka-player";
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import './streaming.scss'

function Streaming(props) {
  console.log(props);
  const videoEl = useRef();
  let history = useHistory();
  const [alertShown, setAlertShown] = useState(true);

  const onStreamLoadError = (error, player) => {
    player.destroy().then(() => {
      const video = videoEl.current;
      if (video) {
        video.src =
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
        video.play();
      }
    });
  };


  useEffect(() => {
    const video = videoEl.current;
    document.addEventListener("keydown", keyPress, false);

    setTimeout(() => {
      setAlertShown(false);
    }, 5000)



    if (video) {
      const player = new shaka.Player(video);
      player.addEventListener("error", () => console.log('Error during playback.'));
      player
        .load("https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8")

        .catch((error) => player && onStreamLoadError(error, player));
    }
    return () => {
      document.removeEventListener("keydown", keyPress, false);
    };
  }, []);


  const keyPress = (e) => {
    if(e.key === "Escape") {
      history.goBack();
    }
  }

  return (
    <div className="streamingWrapper">

      <Alert variant="primary" className="alert" show={alertShown} >
      Use the Escape key to close video preview.
      </Alert>
      <video ref={videoEl} className="video" controls autoPlay />
    </div>
  );
}

export default Streaming;
