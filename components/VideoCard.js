import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdIosShare } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Spinner from "./Spinner";

const VideoCard = ({ post }) => {
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
    <div
      ref={about}
      className="w-full px-2 border-b-[1px] pb-4 border-gray-100"
    >
      <div className="w-full max-w-[800px] h-[400px] lg:h-[400px] m-auto bg-gray-200 relative rounded-xl">
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
          poster={post.poster}
          className="m-auto cursor-pointer w-full h-full object-cover relative rounded-xl"
          playsInline
          loop
          muted
          ref={kidsVideoRef}
        >
          <source src={post.video} />
        </video>
      </div>

      <div className="px-4">
        <div className="flex text-gray-400 mt-2 text-sm">
          <p className="mr-4">{post.views} vistas</p>
          <p>{post.date}</p>
        </div>
        <p className="text-md mt-2">
          {post.title.split(" ").map((str, i) => {
            if (str.startsWith("#")) {
              return (
                <span className="text-blue-500 font-medium" key={i}>
                  {str}{" "}
                </span>
              );
            } else {
              return (
                <span className="" key={i}>
                  {str}{" "}
                </span>
              );
            }
          })}
        </p>

        <div className="flex justify-between mt-2">
          <button className="my-auto  bg-gray-100  text-gray-400 rounded-lg px-2 py-1 ">
            <div className="flex">
              <MdIosShare className="my-auto mr-2 text-md" />
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
