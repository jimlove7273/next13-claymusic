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
      <div
        className="w-[90%] max-w-[900px] mb-2 cursor-pointer text-2xl text-white text-right"
        onClick={() => setPlayYoutube('')}
      >
        &times;
      </div>
      <div className="relative aspect-video w-[90%] max-w-[900px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
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
