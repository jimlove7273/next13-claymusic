'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { albumList } from '@/app/constants';
import { CartPanel } from '../CartPanel/CartPanel';

export const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [whichDrop, setWhichDrop] = useState('');
  const [showCartPanel, setShowCartPanel] = useState(false);
  const pathName = usePathname();

  return (
    <nav
      id="page-nav"
      className="md:fixed top-0 w-full border h-16 border-b-slate-200 bg-[#f4f2ed] flex"
    >
      {showCartPanel && (
        <CartPanel
          showCartPanel={showCartPanel}
          setShowCartPanel={setShowCartPanel}
        />
      )}
      <div className="container mx-auto">
        <div className="flex justify-between h-full items-center px-3">
          <div>
            <img src="/images/home_logoEng.png" width={240} alt="Logo" />
          </div>
          <div className="flex items-center h-full mb-2">
            <div className="hidden md:flex items-center text-gray-700">
              <Link href="/" className="px-2 hover:bg-[#a4cbed] cursor-pointer">
                首頁
              </Link>

              {/** ----------------------------------------------------------------
               * About Us
               ---------------------------------------------------------------- */}
              <div
                className="relative px-2"
                onMouseEnter={() => setWhichDrop('aboutus')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a
                  className={`px-2 hover:bg-[#a4cbed] ${
                    whichDrop === 'aboutus' ||
                    ['aboutclaymusic', 'supportus', 'privacy'].some((el) =>
                      pathName.includes(el),
                    )
                      ? 'bg-[#a4cbed]'
                      : ''
                  }`}
                  href="/"
                >
                  關於我們
                </a>
                <div
                  className={`absolute flex pt-6 z-20 flex-col bg-[#a4cbed] text-gray-700 w-32 ${
                    whichDrop === 'aboutus' ? '' : 'hidden'
                  } shadow-xl shadow-stone-500/50`}
                >
                  <Link
                    className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer"
                    href="/aboutclaymusic"
                  >
                    關於泥土音樂
                  </Link>
                  <a className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer">
                    我們的團隊
                  </a>
                  <Link
                    className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer"
                    href="/contactus"
                  >
                    聯絡我們
                  </Link>
                  <Link
                    className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer"
                    href="/supportus"
                  >
                    支持我們
                  </Link>
                  <Link
                    className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer"
                    href="/privacy"
                  >
                    隱私政策
                  </Link>
                </div>
              </div>

              {/** ----------------------------------------------------------------
               * Products
               ---------------------------------------------------------------- */}
              <div
                className="px-2"
                onMouseEnter={() => setWhichDrop('products')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a
                  className={`px-2 hover:bg-[#a4cbed] ${
                    whichDrop === 'products' ||
                    ['album'].some((el) => pathName.includes(el))
                      ? 'bg-[#a4cbed]'
                      : ''
                  }`}
                  href="/"
                >
                  產品區
                </a>

                <div className="absolute left-0 w-full bg-[#a4cbed]">
                  <div
                    className={`pt-6 text-gray-700 ${
                      whichDrop === 'products' ? '' : 'hidden'
                    } shadow-xl shadow-stone-500/50`}
                  >
                    <div className="p-5 grid grid-cols-4 bg-slate-100">
                      {albumList.map((album) => (
                        <Link
                          key={album.chineseName}
                          href={album.link}
                          className="p-1 pl-3 hover:bg-[#a4cbed] cursor-pointer flex gap-2 items-center"
                        >
                          <img
                            width="40"
                            alt={album.englishName}
                            src={`/images/album/${album.albumCover}.jpeg`}
                          />
                          {album.chineseName}
                        </Link>
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
                className="relative"
                onMouseEnter={() => setWhichDrop('concert')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a
                  className={`px-2 hover:bg-[#a4cbed] ${
                    whichDrop === 'concert' ||
                    ['concerts'].some((el) => pathName.includes(el))
                      ? 'bg-[#a4cbed]'
                      : ''
                  }`}
                  href="/"
                >
                  音樂會消息
                </a>
                <div
                  className={`absolute flex pt-6 flex-col bg-[#a4cbed] text-gray-700 w-32 ${
                    whichDrop === 'concert' ? '' : 'hidden'
                  } shadow-xl shadow-stone-500/50`}
                >
                  <Link
                    className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer"
                    href="/concerts/check"
                  >
                    近期行程
                  </Link>
                  <a className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer">
                    全年音樂會
                  </a>
                </div>
              </div>

              <a className="px-2 hover:bg-[#a4cbed]" href="/">
                相片區
              </a>
              <Link
                className={`px-2 hover:bg-[#a4cbed] ${
                  ['supportus'].some((el) => pathName.includes(el))
                    ? 'bg-[#a4cbed]'
                    : ''
                }`}
                href="/supportus"
              >
                支持我們
              </Link>
            </div>

            <div className="hidden md:block relative">
              <div
                className="mt-1 cursor-pointer"
                onClick={(e) => setShowCartPanel((prev) => !prev)}
              >
                <img width={25} src="/images/icon-cart.png" alt="Cart" />
                <div className="absolute w-[15px] h-[15px] top-[-1px] right-[-5px] text-[9px] text-center bg-[#fb7701] text-white rounded-full">
                  12
                </div>
              </div>
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
        } p-5 w-full h-full bg-gray-900/40 transition-all duration-300 overscroll-none z-10`}
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
          <img
            className="relative w-[200px]"
            alt="Logo"
            src="/images/home_logoEng.jpg"
          />
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
            <a className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer">
              關於泥土音樂
            </a>
            <a className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer">
              我們的團隊
            </a>
            <Link
              className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer"
              href="/contactus"
            >
              聯絡我們
            </Link>
            <Link
              className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer"
              href="/supportus"
            >
              支持我們
            </Link>
            <a className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer">
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
              <Link
                key={album.chineseName}
                href={album.link}
                className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer flex gap-2 items-center"
              >
                <img
                  width="40"
                  alt={album.englishName}
                  src={`/images/album/${album.albumCover}.jpeg`}
                />
                {album.chineseName}
              </Link>
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
            <a className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer">
              近期行程
            </a>
            <a className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer">
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
