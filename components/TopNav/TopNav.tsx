'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { albumList } from '@/app/constants';

export const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [whichDrop, setWhichDrop] = useState('');

  return (
    <nav className="w-full border border-b-slate-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-3">
          <div>
            <img src="/images/home_logoEng.jpg" />
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center text-gray-700">
              <Link
                href="/"
                className="py-5 px-2 hover:bg-[#baccdb] cursor-pointer"
              >
                首頁
              </Link>

              {/** ----------------------------------------------------------------
               * About Us
               ---------------------------------------------------------------- */}
              <div
                className="relative py-5 px-2"
                onMouseEnter={() => setWhichDrop('aboutus')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a className="py-5 px-2" href="/">
                  關於我們
                </a>
                <div
                  className={`absolute flex pt-6 flex-col bg-white text-gray-700 w-32 ${
                    whichDrop === 'aboutus' ? '' : 'hidden'
                  }`}
                >
                  <a className="p-2 bg-slate-100 hover:bg-[#baccdb] cursor-pointer">
                    關於泥土音樂
                  </a>
                  <a className="p-2 bg-slate-100 hover:bg-[#baccdb] cursor-pointer">
                    我們的團隊
                  </a>
                  <a className="p-2 bg-slate-100 hover:bg-[#baccdb] cursor-pointer">
                    聯絡我們
                  </a>
                  <Link
                    className="p-2 bg-slate-100 hover:bg-[#baccdb] cursor-pointer"
                    href="/supportus"
                  >
                    支持我們
                  </Link>
                  <a className="p-2 bg-slate-100 hover:bg-[#baccdb] cursor-pointer">
                    隱私政策
                  </a>
                </div>
              </div>

              {/** ----------------------------------------------------------------
               * Products
               ---------------------------------------------------------------- */}
              <div
                className="py-5 px-2"
                onMouseEnter={() => setWhichDrop('products')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a className="py-5 px-2" href="/">
                  產品區
                </a>

                <div className="absolute left-0 w-full">
                  <div
                    className={`container mx-auto pt-6 text-gray-700 ${
                      whichDrop === 'products' ? '' : 'hidden'
                    }`}
                  >
                    <div className="p-5 grid grid-cols-4 bg-slate-100">
                      {albumList.map((album) => (
                        <a
                          key={album.chineseName}
                          className="p-1 pl-3 hover:bg-[#baccdb] cursor-pointer flex gap-2 items-center"
                        >
                          <img
                            width="40"
                            src={`/images/album/${album.albumCover}.jpeg`}
                          />
                          {album.chineseName}
                        </a>
                      ))}
                      <a className="bg-slate-100"></a>
                      <a className="bg-slate-100"></a>
                      <a className="bg-slate-100"></a>
                    </div>
                  </div>
                </div>
              </div>

              {/** ----------------------------------------------------------------
               * Concerts
               ---------------------------------------------------------------- */}
              <div
                className="relative py-5 px-2"
                onMouseEnter={() => setWhichDrop('concert')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a href="/">音樂會消息</a>
                <div
                  className={`absolute flex pt-6 flex-col bg-white text-gray-700 w-32 ${
                    whichDrop === 'concert' ? '' : 'hidden'
                  }`}
                >
                  <a className="p-2 bg-slate-100 hover:bg-[#baccdb] cursor-pointer">
                    近期行程
                  </a>
                  <a className="p-2 bg-slate-100 hover:bg-[#baccdb] cursor-pointer">
                    全年音樂會
                  </a>
                </div>
              </div>

              <a className="py-5 px-2" href="/">
                相片區
              </a>
              <Link className="py-5 px-2" href="/supportus">
                支持我們
              </Link>
            </div>

            <div className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={(e) => setMobileOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------
      Mobile Menu
      ---------------------------------------------------------------- */}
      <div
        className={`absolute top-0 ${
          mobileOpen ? 'left-0' : '-left-[100%]'
        } p-5 w-full h-full bg-gray-900/40 transition-all duration-300`}
      >
        <div className="z-1 absolute top-0 left-0 w-full max-w-[80%] h-full bg-white"></div>
        <div className="flex flex-col w-full h-full max-w-[80%] text-gray-500 overflow-y-auto">
          <div
            className="relative flex justify-end mr-3"
            onClick={(e) => setMobileOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mb-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <img className="relative w-[70%]" src="/images/home_logoEng.jpg" />
          <Link
            className="inline-block text-gray-800 font-bold relative py-1"
            href="/"
          >
            首頁
          </Link>
          {/** ----------------------------------------------------------------
         * About Us
         ---------------------------------------------------------------- */}
          <div
            className="relative text-gray-800 font-bold py-1 cursor-pointer"
            onClick={() =>
              whichDrop !== 'm-aboutus'
                ? setWhichDrop('m-aboutus')
                : setWhichDrop('')
            }
          >
            關於我們
          </div>
          <div
            className={`flex flex-col ${
              whichDrop === 'm-aboutus' ? '' : 'hidden'
            }`}
          >
            <a className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer">
              關於泥土音樂
            </a>
            <a className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer">
              我們的團隊
            </a>
            <a className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer">
              聯絡我們
            </a>
            <Link
              className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer"
              href="/supportus"
            >
              支持我們
            </Link>
            <a className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer">
              隱私政策
            </a>
          </div>
          {/** ----------------------------------------------------------------
         * Products
         ---------------------------------------------------------------- */}
          <div
            className="relative text-gray-800 font-bold py-1 cursor-pointer"
            onClick={() =>
              whichDrop !== 'm-products'
                ? setWhichDrop('m-products')
                : setWhichDrop('')
            }
          >
            產品區
          </div>
          <div
            className={`flex flex-col ${
              whichDrop === 'm-products' ? '' : 'hidden'
            }`}
          >
            {albumList.map((album) => (
              <a
                key={album.chineseName}
                className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer flex gap-2 items-center"
              >
                <img
                  width="40"
                  src={`/images/album/${album.albumCover}.jpeg`}
                />
                {album.chineseName}
              </a>
            ))}
          </div>
          {/** ----------------------------------------------------------------
         * Concerts
         ---------------------------------------------------------------- */}
          <div
            className="relative text-gray-800 font-bold py-1 cursor-pointer"
            onClick={() =>
              whichDrop !== 'm-concert'
                ? setWhichDrop('m-concert')
                : setWhichDrop('')
            }
          >
            音樂會消息
          </div>
          <div
            className={`flex flex-col ${
              whichDrop === 'm-concert' ? '' : 'hidden'
            }`}
          >
            <a className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer">
              近期行程
            </a>
            <a className="relative py-1 pl-2 hover:bg-[#baccdb] cursor-pointer">
              全年音樂會
            </a>
          </div>
          <a className="relative text-gray-800 font-bold py-1" href="">
            相片區
          </a>
          <Link
            className="relative text-gray-800 font-bold py-1"
            href="/supportus"
          >
            支持我們
          </Link>
          <div className="relative mt-12">
            <hr />
            <div className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
