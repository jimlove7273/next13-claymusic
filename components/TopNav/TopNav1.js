'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NoSSR from 'react-no-ssr';
import { albumList } from '@/app/constants';
import { CartPanel } from '../CartPanel/CartPanel';
import { useCartStore } from '../../store/cartStore';
import { usePanelStore } from '../../store/panelStore';
import { IoMdClose, IoIosMenu } from 'react-icons/io';

export const TopNav1 = () => {
  const [whichDrop, setWhichDrop] = useState('');
  // const [showCartPanel, setShowCartPanel] = useState(false);
  const [showMenuPanel, setShowMenuPanel] = useState(false);
  const { cartPanel, toggleCartPanel } = usePanelStore();

  const { cartQty } = useCartStore();

  useEffect(() => {
    document.body.style.overflow = 'auto';
    if (showMenuPanel) {
      document.body.style.overflow = 'hidden';
    }
  }, [showMenuPanel]);

  return (
    <nav
      id="page-nav"
      className="fixed top-0 w-full border h-16 border-b-slate-200 bg-[#f4f2ed] flex z-40"
    >
      <NoSSR>
        <CartPanel />
      </NoSSR>
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex justify-between h-full items-center px-3">
          <div>
            <img src="/images/home_logoEng.png" width={240} alt="Logo" />
          </div>
          <div className="flex items-center h-full mb-2">
            <div className="hidden md:flex items-center text-gray-700">
              <Link href="/" className="p-2 hover:bg-[#a4cbed] cursor-pointer">
                首頁
              </Link>

              {/** ----------------------------------------------------------------
             * About Us
             ---------------------------------------------------------------- */}
              <div
                className="relative"
                onMouseEnter={() => setWhichDrop('aboutus')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a className={`p-2 hover:bg-[#a4cbed]`} href="/">
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
                onMouseEnter={() => setWhichDrop('products')}
                onMouseLeave={() => setWhichDrop('')}
              >
                <a className={`p-2 hover:bg-[#a4cbed]`} href="/">
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
                <a className={`p-2 hover:bg-[#a4cbed]`} href="/">
                  音樂會消息
                </a>
                <div
                  className={`absolute flex pt-6 flex-col bg-[#a4cbed] text-gray-700 w-32 ${
                    whichDrop === 'concert' ? '' : 'hidden'
                  } shadow-xl shadow-stone-500/50`}
                >
                  <Link
                    className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer"
                    href="/concerts/"
                  >
                    近期行程
                  </Link>
                  <a className="p-2 bg-slate-100 hover:bg-[#a4cbed] cursor-pointer">
                    全年音樂會
                  </a>
                </div>
              </div>

              <a className="p-2 hover:bg-[#a4cbed]" href="/">
                相片區
              </a>
              <Link
                className={`p-2 hover:bg-[#a4cbed] ${
                  // ['supportus'].some((el) => pathName.includes(el))
                  //   ? 'bg-[#a4cbed]'
                  //   : ''
                  ''
                }`}
                href="/supportus"
              >
                支持我們
              </Link>
            </div>

            <div className="hidden md:block relative">
              <div
                className="px-1 mt-1 cursor-pointer"
                onClick={(e) => toggleCartPanel()}
              >
                <img width={25} src="/images/icon-cart.png" alt="Cart" />
                <div className="absolute w-[15px] h-[15px] top-1 right-[-5px] text-[9px] flex pt-[1px] justify-center bg-[#fb7701] text-white rounded-full">
                  {cartQty}
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="transition duration-150 ease-in-out"
              type="button"
              onClick={() => setShowMenuPanel((prev) => !prev)}
            >
              <IoIosMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------
    Mobile Menu
    ---------------------------------------------------------------- */}
      <div>
        <div
          className={`${
            showMenuPanel ? 'absolute' : 'hidden'
          } top-0 left-0 w-full h-screen bg-gray-900/60`}
          onClick={() => setShowMenuPanel(false)}
        >
          &nbsp;
        </div>
        <div
          className={`fixed top-0 left-0 h-screen w-[90%] max-w-[320px] bg-white transition-all duration-300 ${
            showMenuPanel ? '' : '-translate-x-full'
          }`}
          tabIndex={-1}
        >
          <div className="flex flex-col w-full p-6 h-full text-gray-500 overflow-y-auto">
            <div className="flex justify-between">
              <img
                className="relative w-[200px]"
                alt="Logo"
                src="/images/home_logoEng.jpg"
              />
              <button
                type="button"
                className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowMenuPanel((prev) => !prev)}
              >
                <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                  <IoMdClose size={24} />
                </span>
              </button>
            </div>

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
              <Link
                className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer"
                href="/privacy"
              >
                隱私政策
              </Link>
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
              <Link
                href="/concerts"
                className="relative py-1 pl-2 hover:bg-[#a4cbed] cursor-pointer"
              >
                近期行程
              </Link>
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
                <div className="inline-block relative">
                  <div
                    className="px-1 mt-1 cursor-pointer"
                    onClick={(e) => toggleCartPanel()}
                  >
                    <img width={25} src="/images/icon-cart.png" alt="Cart" />
                    <div className="absolute w-[15px] h-[15px] top-[-1px] right-[-5px] text-[9px] text-center bg-[#fb7701] text-white rounded-full">
                      {cartQty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
