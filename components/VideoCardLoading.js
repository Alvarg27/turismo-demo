import React from "react";

const VideoCardLoading = () => {
  return (
    <div className="px-2">
      <div className="w-full max-w-[800px] h-[400px] bg-gray-300 rounded-lg animate-pulse" />

      <div className="flex mt-4">
        <div className="w-[60px] h-[16px] bg-gray-300 rounded-sm mr-4" />
        <div className="w-[100px] h-[16px] bg-gray-300 rounded-sm" />
      </div>
      <div className="w-[200px] mt-4 h-[16px] bg-gray-300 rounded-sm" />

      <div className="flex justify-between mt-2">
        <div className="w-[110px] h-[30px] my-auto bg-gray-300 rounded-lg" />
        <div className="w-[140px] h-[16px] my-auto bg-gray-300 rounded-sm" />
      </div>
    </div>
  );
};

export default VideoCardLoading;
