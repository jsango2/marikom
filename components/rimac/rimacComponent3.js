import { render } from "react-dom";
import { VideoScroll } from "react-video-scroll";

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${
    Math.floor(videoEl.duration) * playbackRate + "px"
  })`;
  wrapperEl.style.marginBottom = `calc(180% - ${
    Math.floor(videoEl.duration) * playbackRate + "px"
  })`;
};

export default function RC3() {
  return (
    <div style={{ height: "1050vh", position: "relative" }}>
      <VideoScroll
        onLoad={(props) =>
          setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
        }
        playbackRate={45}
        style={{ position: "sticky" }}
      >
        <video
          tabIndex="0"
          autobuffer="autobuffer"
          preload="preload"
          //   style={{ width: "100%", objectFit: "contain" }}
          style={{
            position: "fixed",
            width: "100vw",
            touchAction: "none",
            left: "0",
            top: "0",
          }}
          playsInline
        >
          <source type="video/mp4" src="./oculus.mp4" />
        </video>
      </VideoScroll>
    </div>
  );
}