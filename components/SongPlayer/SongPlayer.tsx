import React from 'react';

type SongInfo = {
  chineseName: string;
  englishName: string;
  albumCover: string;
};

type SongPlayerProps = {
  songInfo: SongInfo;
};

const SongPlayer = (songInfo: SongPlayerProps) => {
  const { chineseName, englishName, albumCover } = songInfo.songInfo;
  return (
    <div className="flex">
      <div className="m-3">
        <img
          width="120"
          src={`/images/album/${albumCover}.jpeg`}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="text-white">
          <div className="mb-1">Dear Friend / 親密的朋友</div>
          <div className="text-xs">
            <i>
              Album: {englishName} / {chineseName}
            </i>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-slate-200 rounded-full flex items-center">
            <embed
              src="/images/icon-play.svg"
              width="30"
              height="30"
              type="image/svg+xml"
            />
          </div>
          <div className="relative w-[100px] md:w-[200px] h-[10px] mx-3">
            <div className="absolute w-full h-full bg-neutral-600">&nbsp;</div>
            <div className="absolute w-[50px] md:w-[100px] h-full bg-neutral-300">
              &nbsp;
            </div>
          </div>
          <div className="bg-slate-200 rounded-full flex items-center p-1">
            <embed
              src="/images/icon-volume.svg"
              width="22"
              height="22"
              type="image/svg+xml"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
