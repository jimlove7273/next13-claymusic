'use client';
import { HomeYoutubeList } from '@/app/constants';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const YoutubeList = () => {
  const [youtubes, setYoutubes] = useState<
    Array<{
      id: number;
      title: string;
      channelId: string;
      playlistId: string;
      picture: string;
    }>
  >([]);

  useEffect(() => {
    setYoutubes([]);
    HomeYoutubeList.map((ytList, i) => {
      fetch(ytList.link)
        .then((res) => res.json())
        .then((data) => {
          let youtubeData = data.items[0].snippet;
          let ytData = {
            id: ytList.id,
            title: ytList.title,
            channelId: youtubeData.channelId,
            playlistId: youtubeData.playlistId,
            picture: youtubeData.thumbnails.medium.url,
          };
          setYoutubes((prevYoutubes) => [...prevYoutubes, ytData]);
        });
    });

    console.log('youtubes', youtubes);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {youtubes
          .sort((a, b) => a.id - b.id)
          .map((yt, i) => (
            <div key={i} className="relative -z-10">
              <div className="flex justify-between items-center pr-4">
                <div className="text-2xl font-bold my-2">{yt.title}</div>
                <Link
                  href={`https://www.youtube.com/playlist?list=${yt.playlistId}`}
                  target="_blank"
                >
                  <img
                    src="/images/icon-youtubechannel.png"
                    alt="Youtube Channel"
                  />
                </Link>
              </div>
              <div>
                <img src={yt.picture} alt={yt.title} className="w-full" />
              </div>
              <div className="absolute top-1/2 left-[40%] flex items-center justify-center">
                <img src="/images/icon-videoplay.png" alt="Play" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default YoutubeList;
