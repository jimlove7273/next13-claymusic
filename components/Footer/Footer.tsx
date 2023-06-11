import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#2c353d] text-gray-300 p-8">
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between">
        <div className="grow">
          <div className="text-[#d4e2fa] text-xl mb-3">我們的網頁</div>
          <hr className="border-dotted mb-3 text-sm" />
          <div>
            <Link className="cursor-pointer" href="/supportus">
              支持我們
            </Link>
            <br />
            產品區
            <br />
            <Link className="cursor-pointer" href="/concerts/check">
              音樂會消息
            </Link>
            <br />
            泥土相簿
            <br />
            影視區
            <br />
            <Link className="cursor-pointer" href="/privacy">
              隱私政策
            </Link>
          </div>
        </div>
        <div></div>
        <div>
          <div className="text-[#d4e2fa] text-xl mb-3">與我們聯絡</div>
          <hr className="border-dotted mb-3 text-sm" />
          <div>
            Clay Music
            <br />
            P. O. Box 5451
            <br />
            Diamond Bar, CA 91765-7451
            <br />
            U.S.A.
            <br />
            <br />
            電話/傳真: 909.861.7906
            <br />
            電郵: amy@claymusic.org
          </div>
        </div>
        <div>
          <div className="text-[#d4e2fa] text-xl mb-3">與我們連接</div>
          <hr className="border-dotted mb-3 text-sm" />
          <div className="flex">
            <img
              className="w-[40px] h-[40px]"
              src="/images/icon-facebook.svg"
              alt="Facebook"
            />
            <img
              className="w-[40px] h-[40px]"
              src="/images/icon-twitter.svg"
              alt="Twitter"
            />
            <img
              className="w-[40px] h-[40px]"
              src="/images/icon-email.png"
              alt="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
