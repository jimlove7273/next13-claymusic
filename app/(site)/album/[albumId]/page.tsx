'use client';
import { albumList, albums } from '../../../constants';
import { useCartStore } from '@/store/cartStore';
import { useCurrentSong } from '@/store/songPlayStore';
import { IoMdPlay } from 'react-icons/io';
import Image from 'next/image';

import SongPlayer from '@/components/SongPlayer/SongPlayer';

const AlbumSinglePage = ({ params }: any) => {
  // Get Album info
  let chineseName: string = '';
  let englishName: string = '';
  let albumCover: string = '';
  let albumSeq: number = 0;
  let albumSongs: { title: string; mp3url: string }[];
  let foundAlbum = albumList.filter(
    (checkAlbum) => checkAlbum.link === '/album/' + params.albumId,
  );
  if (foundAlbum.length > 0) {
    chineseName = foundAlbum[0].chineseName;
    englishName = foundAlbum[0].englishName;
    albumCover = foundAlbum[0].albumCover;
    albumSeq = foundAlbum[0].seq as number;
  }

  // Get List of Songs
  let albumKey = 'album' + params.albumId;

  albumSongs = albums['albumnone'].songs;
  if (albums[albumKey as keyof typeof albums] !== undefined) {
    albumSongs = albums[albumKey as keyof typeof albums].songs;
  }

  // Get store action
  const { cart, addToCart, cartCalculator } = useCartStore();
  const { currentSong, setCurrentSong } = useCurrentSong();

  const addToCartFunc = (albumType: 'CD' | 'SB') => {
    let addToCartInfo = {
      id: albumSeq,
      itemNumber: albumType + albumSeq,
      product: englishName + ' | ' + chineseName,
      productType: albumType,
      quantity: 1,
      price: albumType === 'CD' ? 10.99 : 5.99,
    };
    addToCart(addToCartInfo);
    cartCalculator();
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 py-10">
        <div className="md:w-1/5 xs:w-full">
          <div className="shadow-2xl">
            <Image
              src={`/images/album/${albumCover}.jpeg`}
              className="relative w-full object-contain -z-10"
              alt="Album"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-10">
            我要買
            <div className="flex space-x-2 mt-2">
              <div className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-1 rounded-md cursor-pointer">
                <div onClick={() => addToCartFunc('CD')}>+ CD</div>
              </div>
              <div
                onClick={() => addToCartFunc('SB')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-1 rounded-md cursor-pointer"
              >
                + 歌本
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 xs:w-full">
          <div className="text-4xl">
            {chineseName} {englishName}
          </div>
          <div className="mt-10">
            {albumSongs.length === 0 && <div>Song Information Found</div>}
            {albumSongs.length > 0 &&
              albumSongs.map((song) => (
                <div
                  key={song.title}
                  className="border-b border-gray-200 py-2 flex justify-between items-center"
                >
                  <div
                    className="ml-2 cursor-pointer"
                    onClick={() => setCurrentSong(song.title, song.mp3url)}
                  >
                    <IoMdPlay />
                  </div>
                  <div className="w-[60%]">
                    <div className="font-bold text-lg">{song.title}</div>
                    <div className="text-xs text-gray-300">{chineseName}</div>
                  </div>
                  <div className="text-sm p-1 rounded-md cursor-pointer hover:bg-blue-600 hover:text-gray-100">
                    購買MP3
                  </div>
                  <div className="hidden md:block text-sm">下載簡譜</div>
                  <div className="hidden md:block text-sm mr-2">下載PPT</div>
                  {currentSong.title !== '' && (
                    <SongPlayer
                      albumName={chineseName}
                      mp3url={currentSong.mp3url}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumSinglePage;
