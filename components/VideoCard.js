import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { FaPlay, FaShare } from "react-icons/fa";
import Spinner from "./Spinner";

const VideoCard = () => {
  const [playing, setPlaying] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [elementOffsetY, setElementOffsetY] = useState();

  const about = useRef();

  const kidsVideoRef = useRef(null);

  const pauseVideo = () => {
    kidsVideoRef.current.pause();
    setPlaying(false);
  };
  const handleVideoPress = () => {
    if (!playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };

  const startVideo = () => {
    kidsVideoRef.current.play();
    setPlaying(true);
  };

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      ) &&
      !isShowing
    ) {
      return;
    }
    if (!isShowing) {
      pauseVideo();
    }
    startVideo();
  }, [isShowing]);

  useEffect(() => {
    setElementOffsetY(about.current.offsetTop);
  }, []);

  return (
    <div ref={about} className="w-full px-2">
      <div className="w-full max-w-[800px] h-[300px] lg:h-[400px] m-auto bg-gray-200 relative rounded-lg overflow-hidden">
        <div className="absolute w-full h-full flex">
          <Spinner />
        </div>
        <Transition
          show={!playing}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => handleVideoPress()}
            className="absolute w-full h-full flex bg-black bg-opacity-30 z-20"
          >
            <FaPlay className="m-auto text-6xl text-white opacity-50" />
          </div>
        </Transition>
        <Transition
          show={false && playing}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => handleVideoPress()}
            className="absolute w-full h-full flex bg-black bg-opacity-30"
          >
            <Spinner />
          </div>
        </Transition>
        <video
          onClick={() => handleVideoPress()}
          poster="/poster.webp"
          className="m-auto cursor-pointer w-full h-full object-cover relative"
          playsInline
          loop
          muted
          ref={kidsVideoRef}
        >
          <source src="/turismo.mp4" />
        </video>
      </div>
      <div className="px-4">
        <div className="flex text-gray-500 mt-2 text-sm">
          <p className="mr-4">943 vistas</p>
          <p>Aug 31, 2021</p>
        </div>
        <p className="font-medium">
          Querétaro, una ciudad que tienes que conocer
        </p>
        <button>
          <div className="flex bg-gray-200 text-gray-500 rounded-lg px-2 py-1 mt-4">
            <FaShare className="my-auto mr-2 text-sm" />
            <p className="my-auto text-sm">Compartir</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
