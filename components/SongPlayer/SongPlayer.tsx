import React from 'react';

const SongPlayer = () => {
  return (
    <div className="flex">
      <div className="m-3">
        <img
          width="120"
          src="/images/album/CD-DearFriend.jpeg"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="text-white">
          <div className="mb-1">Dear Friend / 親密的朋友</div>
          <div className="text-xs">
            <i>Album: Dear Friend / 親密的朋友</i>
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

    // <div className="absolute w-full flex">
    //   <div className="container bg-slate-800 text-white p-3 grid grid-cols-2 items-center gap-3">
    //     <div className="flex mr-3">
    //       <div className="mr-5">
    //         <img width="60" src="/images/album/CD-DearFriend.jpeg" />
    //       </div>
    //       <div>
    //         <div className="mb-2">
    //           <span className="text-gray-200">Song:</span>
    //           <span className="text-lg">Dear Friend / 親密的朋友</span>
    //         </div>
    //         <div className="text-sm">
    //           <span className="text-gray-400">
    //             <i>Album: </i>
    //           </span>
    //           <span className="text-gray-300">Dear Friend 親密的朋友</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <embed
    //         src="/images/icon-play.svg"
    //         width="30"
    //         height="30"
    //         type="image/svg+xml"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default SongPlayer;
