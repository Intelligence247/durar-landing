"use client";

import Image from "next/image";

import { useState } from "react";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoURL = "https://www.youtube.com/embed/X1mC1XY65Kc?si=WQ-kClI8w8lGvUrZ&amp;controls=0";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <>
      {/* IFRAME HERE : REPLACE LATER */}
      <div className="relative w-full h-[432px]">
        <iframe
          className="w-full h-full rounded-[40px]"
          src={`${videoURL}${isPlaying ? "&amp;autoplay=1" : ""}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>

        {/* PLAY BUTTON */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/50 rounded-[40px] flex justify-center items-center">
            <button type="button" className="relative bg-white rounded-full w-[120px] h-[120px] scale-50 md:scale-75 lg:scale-100" onClick={handlePlay}>
              <Image
                src={"/play.svg"}
                alt="Play Icon"
                width={44}
                height={44}
                className="absolute top-1/2 left-[55%] transform -translate-x-[55%] -translate-y-1/2"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
