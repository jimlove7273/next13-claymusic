import React from 'react';

const YoutubePlay = ({
  videoId,
  setPlayYoutube,
}: {
  videoId: string;
  setPlayYoutube: (videoId: string) => void;
}) => {
  return (
    <div className="fixed bg-gray-900 bg-opacity-80 inset-0 flex flex-col justify-center items-center">
      <div className="relative w-[90%] h-0 max-w-[900px] bg-gray-200 pb-[56.25%] lg:pb-[30%]">
        <div
          className="flex justify-end mr-2 cursor-pointer text-2xl"
          onClick={() => setPlayYoutube('')}
        >
          &times;
        </div>
        <iframe
          // width="560"
          // height="315"
          className="absolute mt-[30px] top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubePlay;
