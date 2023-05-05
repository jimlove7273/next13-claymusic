import React from 'react';
import SongPlayer from '@/components/SongPlayer/SongPlayer';

const AlbumSinglePage = () => {
  return (
    <>
      <div className="container mx-auto my-8 p-3">
        <div className="text-2xl font-bold mb-5">
          專輯: 親密的朋友 / Dear Friend
        </div>
        <div className="w-full md:w-[80%] mx-auto bg-black">
          <div className="border-8 border-x-gray-400">
            <SongPlayer />
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
                  <tr className="text-gray-100 hover:bg-slate-600 cursor-pointer items-center">
                    <td className="py-2 pl-2">1. 為何對我這麼好</td>
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
                  <tr className="text-gray-400 hover:bg-slate-600 cursor-pointer">
                    <td className="py-2 pl-2">2. 你名何其美</td>
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
                  <tr className="text-gray-400 hover:bg-slate-600 cursor-pointer">
                    <td className="py-2 pl-2">3. 親密的朋友</td>
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
                  <tr className="text-gray-400 hover:bg-slate-600 cursor-pointer">
                    <td className="py-2 pl-2">4. 自由</td>
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
                  <tr className="text-gray-400 hover:bg-slate-600 cursor-pointer">
                    <td className="py-2 pl-2">5. 打開黑暗的角落</td>
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
                  <tr className="text-gray-400 hover:bg-slate-600 cursor-pointer">
                    <td className="py-2 pl-2">6. 榮耀歸神 平安給人</td>
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
                  <tr className="text-gray-400 hover:bg-slate-600 cursor-pointer">
                    <td className="py-2 pl-2">7. 水火</td>
                    <td className="hidden md:table-cell py-2 cursor-pointer">
                      下載
                    </td>
                    <td className="hidden md:table-cell py-2 cursor-pointer">
                      下載
                    </td>
                    <td className="text-center">MP3</td>
                  </tr>
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
