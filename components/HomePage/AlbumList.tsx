import React from 'react';
import { albumList, heroContent } from '@/app/constants';

const AlbumList = () => {
  const featuredAlbum = albumList.find((album) => album.featured === true);
  const albums = albumList
    .filter((album) => album.homepageOrder > 0)
    .sort((a, b) => a.homepageOrder - b.homepageOrder);

  return (
    <div className="w-full py-8 bg-[#b5ccd7] overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#96b2c5] p-6 md:col-span-2 md:flex md:gap-4 lg:block lg:col-span-1">
            <img
              className="md:w-1/2 lg:w-full"
              src={'/images/album/' + featuredAlbum?.albumCover + '.jpeg'}
              alt="Hero Album"
            />
            <div className="md:flex md:flex-col">
              <div className="text-2xl font-bold my-4">{heroContent.title}</div>
              <div>{heroContent.content}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {albums.map((album, i) => (
                <div key={i} className="box-border p-4">
                  <div className="text-xl font-bold my-2 truncate">
                    {album.chineseName}/{album.englishName}
                  </div>
                  <div className="bg-white transition-all duration-300 p-2 hover:p-0">
                    <img
                      src={'/images/album/' + album.albumCover + '.jpeg'}
                      alt={album.englishName}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-8 flex justify-center">
              <div className="bg-[#337ab7] text-white inline-block px-4 py-2 rounded-md ">
                更多專輯由此進入
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
