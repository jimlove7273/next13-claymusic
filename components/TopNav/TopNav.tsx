'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NoSSR from 'react-no-ssr';
import { albumList } from '@/app/constants';
import { CartPanel } from '../CartPanel/CartPanel';
import { useCartStore } from '../../store/cartStore';
import { usePanelStore } from '../../store/panelStore';
import { IoMdClose, IoIosMenu } from 'react-icons/io';

export const TopNav = () => {
  const [showMenuPanel, setShowMenuPanel] = useState(false);
  const { toggleCartPanel } = usePanelStore();

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
      className="fixed top-0 w-full border h-16 border-b-slate-200 bg-[#f4f2ed] flex items-center z-40"
    >
      <NoSSR>
        <CartPanel />
      </NoSSR>
      <div className="w-full max-w-[1280px] mx-auto px-2">
        <div className="flex justify-between items-center">
          <div>
            <img src="/images/home_logoEng.png" width={240} alt="Logo" />
          </div>
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
              id="right-nav"
              className={`absolute w-[90%] max-w-[320px] h-screen flex flex-col bg-white top-0 left-0
              md:flex md:flex-row md:h-auto md:relative md:bg-transparent md:w-full md:max-w-full
              transition-all duration-300 ${
                showMenuPanel === false &&
                window.innerWidth < 768 &&
                '-translate-x-full'
              }`}
            >
              <div className={`${showMenuPanel ? 'block my-10' : 'hidden'}`}>
                <div className="flex justify-between px-3">
                  <img src="/images/home_logoEng.png" width={240} alt="Logo" />
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
              </div>
              <Link className="p-2 cursor-pointer hover:bg-blue-200" href="/">
                首頁
              </Link>
              <div className="group">
                <div className="p-2 cursor-pointer group-hover:bg-blue-200">
                  關於我們
                </div>
                <div className="md:absolute hidden top-10 flex-col group-hover:flex bg-zinc-100 shadow-md shadow-blue-500/50">
                  <Link
                    className="py-2 px-5 hover:bg-blue-200"
                    href="/aboutclaymusic"
                  >
                    關於泥土音樂
                  </Link>
                  <Link className="py-2 px-5 hover:bg-blue-200" href="#">
                    我們的團隊
                  </Link>
                  <Link
                    className="py-2 px-5 hover:bg-blue-200"
                    href="/contactus"
                  >
                    聯絡我們
                  </Link>
                  <Link
                    className="py-2 px-5 hover:bg-blue-200"
                    href="/supportus"
                  >
                    支持我們
                  </Link>
                  <Link className="py-2 px-5 hover:bg-blue-200" href="/privacy">
                    隱私政策
                  </Link>
                </div>
              </div>
              <div className="group">
                <div className="p-2 cursor-pointer group-hover:bg-blue-200">
                  產品區
                </div>
                <div className="md:absolute md:top-10 hidden md:-translate-x-96 w-full md:w-[45rem] flex-col group-hover:flex bg-zinc-100 shadow-md shadow-blue-500/50 py-4 md:p-5">
                  <div className="flex flex-col md:grid md:grid-cols-3">
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
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="p-2 cursor-pointer group-hover:bg-blue-200">
                  音樂會消息
                </div>
                <div className="md:absolute top-10 flex-col hidden group-hover:flex bg-zinc-100 shadow-md shadow-blue-500/50">
                  <Link
                    className="py-2 px-5 hover:bg-blue-200"
                    href="/concerts"
                  >
                    近期行程
                  </Link>
                  <Link
                    className="py-2 px-5 hover:bg-blue-200"
                    href="/concerts"
                  >
                    全年音樂會
                  </Link>
                </div>
              </div>
              <Link className="p-2 cursor-pointer hover:bg-blue-200" href="/">
                相片區
              </Link>
              <Link
                className="p-2 cursor-pointer hover:bg-blue-200"
                href="/supportus"
              >
                支持我們
              </Link>
              <div className="md:flex items-center relative">
                <div
                  className="px-1 mt-1 cursor-pointer relative inline-block"
                  onClick={(e) => toggleCartPanel()}
                >
                  <img width={25} src="/images/icon-cart.png" alt="Cart" />
                  <div className="absolute w-[15px] h-[15px] top-0 right-[-5px] text-[9px] flex pt-[1px] justify-center bg-[#fb7701] text-white rounded-full">
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
      </div>
    </nav>
  );
};
