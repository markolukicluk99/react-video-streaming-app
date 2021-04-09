import React, { useEffect, useRef } from "react";
import shaka from "shaka-player";
import { useHistory } from "react-router-dom";

function Streaming() {
  const videoComponent = useRef();
  let history = useHistory();

  const onErrorEvent = () => {};
  const onError = (error, player) => {
    player.destroy().then(() => {
      const video = videoComponent.current;
      if (video) {
        video.src =
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
        video.play();
      }
    });
  };
  const closeDialog = () => {
    history.push("/homepage");
  };

  useEffect(() => {
    const video = videoComponent.current;
    if (video) {
      const player = new shaka.Player(video);
      player.addEventListener("error", onErrorEvent);

      // Try to play the video
      player
        .load("https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8")
        .catch((err) => player && onError(err, player));
    }
  }, []);

  return (
    <div>
      <p className="closeIcon" role="presentation" onClick={closeDialog}>
        Close
      </p>
      <video ref={videoComponent} controls autoPlay className="assetPlayer" />
    </div>
  );
}

export default Streaming;
