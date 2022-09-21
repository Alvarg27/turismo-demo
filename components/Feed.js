import React, { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import VideoCard from "./VideoCard";
import VideoCardLoading from "./VideoCardLoading";

const posts = [
  {
    _id: 1,
    title: "Querétaro, una ciudad que tienes que conocer #turismo",
    date: "Aug 31, 2021",
    views: "943",
    video: "/turismo.mp4",
    poster: "/poster.webp",
  },
  {
    _id: 2,
    title: "#CaminandoPorQuerétaro T1 E14 Cerro de las Campanas",
    date: "Jan 18, 2022",
    views: "74",
    video: "/turismo2.mp4",
    poster: "/poster2.webp",
  },
];

const Feed = () => {
  const [inView, setInView] = useState();

  useEffect(() => {
    if (!localStorage) {
      result;
    }
    const result = JSON.parse(localStorage.getItem("inView"));

    if (result === 1) {
      localStorage.setItem("inView", 2);
      setInView(2);
      return;
    }
    localStorage.setItem("inView", 1);
    setInView(1);
  }, []);

  return (
    <div>
      <d className="inline-flex bg-white py-2 px-4 rounded-full shadow-lg mb-6 mx-2">
        <FaFire className="my-auto mr-2 text-red-300" />
        <p className="my-auto">Videos recientes</p>
      </d>
      {inView ? (
        posts.map((post) => {
          if (inView === post._id)
            return <VideoCard key={post._id} post={post} />;
        })
      ) : (
        <VideoCardLoading />
      )}
    </div>
  );
};

export default Feed;
