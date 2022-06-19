//import { useState, useEffect } from "react";
//import Marquee from "react-fast-marquee";
//import PopUp from "../animations/PopUpCards";

export default function SubModules() {
  return (
    <>
      {/* {videoItems.length >= 1 && (
        <Marquee
          direction="right"
          speed={30}
          gradient
          gradientWidth={0}
          gradientColor={[31, 31, 31]}
        >
          {videoItems.map((videos, id) => (
            <button
              key={id}
              onClick={() => {
                window.scrollTo(0, 0);

                livestream.style.display = "block";
                document.getElementById("no-stream").style.display = "none";
                livestream.src =
                  "https://www.youtube.com/embed/" +
                  videos.contentDetails.videoId;
              }}
            >
              <PopUp
                src={videos.snippet.thumbnails.high.url}
                title={videos.snippet.title}
              />
            </button>
          ))}
        </Marquee>
      )} */}
    </>
  );
}
