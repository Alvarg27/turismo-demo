import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TbDots } from "react-icons/tb";
import {
  FaArrowRight,
  FaChevronRight,
  FaEllipsisH,
  FaPlay,
  FaShare,
} from "react-icons/fa";
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
      <div className="flex flex-row-reverse px-2">
        <TbDots className="text-gray-400 text-2xl" />
      </div>
      <div className="w-full max-w-[800px] h-[300px] lg:h-[400px] m-auto bg-gray-200 relative rounded-xl">
        <div className="absolute w-full h-full flex"></div>

        <div
          onClick={() => handleVideoPress()}
          className={`absolute w-full h-full flex bg-black bg-opacity-30 z-30  transition duration-500 rounded-xl cursor-pointer ${
            !playing ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaPlay className="m-auto text-6xl text-white opacity-50" />
        </div>

        <video
          onClick={() => handleVideoPress()}
          poster="/poster.webp"
          className="m-auto cursor-pointer w-full h-full object-cover relative rounded-xl"
          playsInline
          loop
          muted
          ref={kidsVideoRef}
        >
          <source src="/turismo.mp4" />
        </video>
      </div>
      <div className=" h-[50px] flex border-t-[1px]  border-b-[1px] mt-2">
        <div className="m-auto flex justify-between w-full px-4 cursor-pointer ">
          <p className="text text-indigo-700 my-auto">Ver más videos</p>
          <FaChevronRight className="my-auto" />
        </div>
      </div>
      <div className="px-4">
        <div className="flex text-gray-500 mt-2 text-sm">
          <p className="mr-4">943 vistas</p>
          <p>Aug 31, 2021</p>
        </div>
        <p className="font-medium">
          Querétaro, una ciudad que tienes que conocer
        </p>
        <div className="flex justify-between mt-2">
          <button className="my-auto  bg-gray-200  text-gray-500 rounded-lg px-2 py-1 ">
            <div className="flex">
              <FaShare className="my-auto mr-2 text-sm" />
              <p className="my-auto text-sm">Compartir</p>
            </div>
          </button>
          <p className="my-auto text-sm text-gray-400">Públicación sugerida</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
