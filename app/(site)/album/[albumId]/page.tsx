import React from 'react';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { albumList, albumdearfriend, albumoneday } from '../../../constants';

import SongPlayer from '@/components/SongPlayer/SongPlayer';

type AlbumId = 'dearfriend' | 'oneday';
const albums = {
  dearfriend: albumdearfriend,
  oneday: albumoneday,
};

let chineseName: string, englishName: string, albumCover: string;

const AlbumSinglePage = ({ params }: any) => {
  let currentAlbum = albumdearfriend;
  currentAlbum =
    albums[params.albumId as AlbumId] === undefined
      ? { index: 0, songs: [] }
      : albums[params.albumId as AlbumId];

  let songIndex = currentAlbum.index;
  let songs = currentAlbum.songs;

  let foundAlbum = albumList.filter(
    (checkAlbum) => checkAlbum.link === '/album/' + params.albumId,
  );
  if (foundAlbum) {
    chineseName = foundAlbum[0].chineseName;
    englishName = foundAlbum[0].englishName;
    albumCover = foundAlbum[0].albumCover;
  }

  return (
    <>
      <div className="container max-w-full mx-auto my-8 md:my-24 p-3">
        <div className="text-2xl font-bold mb-5">
          專輯: 親密的朋友 / Dear Friend
        </div>
        <div className="w-full md:w-[80%] mx-auto bg-black">
          <div className="border-8 border-x-gray-400">
            <SongPlayer songInfo={{ chineseName, englishName, albumCover }} />
            <div className="p-5 bg-slate-900">
              <table className="w-full p-5 text-white">
                <thead>
                  <tr className="bg-slate-700">
                    <td>
                      <div className="flex items-center text-lg font-bold my-2">
                        &nbsp;&nbsp;試聽
                      </div>
                    </td>
                    <td className="hidden md:table-cell">
                      <div className="items-center text-lg font-bold">簡譜</div>
                    </td>
                    <td className="hidden md:table-cell">
                      <div className="items-center text-lg font-bold">PPT</div>
                    </td>
                    <td>
                      <div className="flex items-center text-lg font-bold justify-center">
                        購買MP3
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {songs.map((current, index) => (
                    <>
                      <tr
                        key={index}
                        className="text-gray-100 hover:bg-slate-600 cursor-pointer items-center"
                      >
                        <td className="py-2 pl-2">
                          {index + 1}. {current}
                        </td>
                        <td className="hidden md:table-cell py-2 cursor-pointer">
                          下載
                        </td>
                        <td className="hidden md:table-cell py-2 cursor-pointer">
                          下載
                        </td>
                        <td className="text-center">MP3</td>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <hr className="border-dotted border-gray-600" />
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumSinglePage;
