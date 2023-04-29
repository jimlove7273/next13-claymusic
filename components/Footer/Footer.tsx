import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#2c353d] text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between">
        <div className="grow">
          <div className="text-[#d4e2fa] text-xl mb-3">我們的網頁</div>
          <hr className="border-dotted mb-3 text-sm" />
          <div>
            支持我們
            <br />
            產品區
            <br />
            音樂會消息
            <br />
            泥土相簿
            <br />
            影視區
            <br />
            隱私政策
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
            />
            <img className="w-[40px] h-[40px]" src="/images/icon-twitter.svg" />
            <img className="w-[40px] h-[40px]" src="/images/icon-email.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
