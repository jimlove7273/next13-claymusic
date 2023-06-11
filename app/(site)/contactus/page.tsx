import React from 'react';
import Link from 'next/link';

const Contactus = () => {
  return (
    <div className="p-5 md:px-0 py-10">
      <div className="text-2xl font-bold mb-5">聯絡我們 / Contact Us</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 border-r border-gray-300">
          <div className="bg-gray-300 rounded-lg p-3 mr-3 mb-3">
            <div className="font-bold">
              我們的郵寄地址 – Our Mailing Address
            </div>
            <br />
            <div className="ml-3">
              Clay Music
              <br />
              P. O. Box 5451
              <br />
              Diamond Bar, CA 91765-7451
              <br />
              U.S.A.
            </div>
          </div>
          <div className="mb-3 text-stone-600">
            <div className="font-bold">
              我們的電話/傳真 – Our Phone Number/Fax
            </div>
            909.861.7906
          </div>
          <div className="mb-3 text-stone-600">
            <div className="font-bold">電郵 Amy – Email Amy Sand</div>
            <Link className="text-cyan-600" href="mailto:amy@claymusic.org">
              amy@claymusic.org
            </Link>
          </div>
          <hr className="w-11/12 h-px my-3 bg-black bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200" />
          <div className="mb-3 text-stone-600">
            <div className="font-bold">
              邀請泥土音樂 – Invite Clay Music to Concert
            </div>
            <Link className="text-cyan-600" href="mailto:luis@claymusic.org">
              luis@claymusic.org
            </Link>
          </div>
          <hr className="w-11/12 h-px my-3 bg-black bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200" />
          <div className="mb-3 text-stone-600">
            <div className="font-bold">版權事宜 – Copyright Issues</div>
            <Link className="text-cyan-600" href="mailto:natalie@claymusic.org">
              natalie@claymusic.org
            </Link>
          </div>
          <hr className="w-11/12 h-px my-3 bg-black bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200" />
          <div className="mb-3 text-stone-600">
            <div className="font-bold">電郵網站維修同工 – Email Webmaster</div>
            <Link className="text-cyan-600" href="mailto:jim@claymusic.org">
              jim@claymusic.org
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <div className="font-bold">
            您的姓名 / Your Name 〈需填寫 / Required〉
          </div>
          <input
            type="text"
            name="name"
            className="border p-2 w-full mt-2 mb-5"
          />
          <div className="font-bold">
            您的電子郵件信箱 / Your Email 〈需填寫 / Required〉
          </div>
          <input
            type="text"
            name="name"
            className="border p-2 w-full mt-2 mb-5"
          />
          <div className="font-bold">您的信件內容 / Your Message</div>
          <textarea
            name="message"
            className="w-full border p-2 mt-2 mb-3 h-48"
          />
          <button className="px-8 py-3 bg-slate-500 rounded-lg hover:bg-slate-400 text-white">
            傳送 / Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
