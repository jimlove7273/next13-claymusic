import React from 'react';

const Supportus = () => {
  return (
    <div className="my-8 md:my-24 p-3">
      <div className="text-2xl font-bold mb-5">支持我們 / Support Us</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img className="w-full" src="/images/supportus.jpeg" />
        </div>
        <div className="text-gray-700">
          泥土音樂是美國非營利機構, 宗旨是用音樂傳揚神的愛.
          <br />
          <br />
          除了製作高水準福音CD和歌譜外, 我們也在世界各地舉行音樂佈道會,
          挑旺愛主的心, 更重要的是領人接受耶穌! 過去十幾年來, 數百場音樂會中,
          有許多朋友決志信主, 感謝神的同在, 也求神繼續使用這塊祂手中的泥土.
          我們的經費來源主要是奉獻! 奉獻是投資天國的事業! 您如果有感動願意參與,
          可以使用我們的&quot;<b>網上奉獻</b>&quot;, 或寄支票至:
          <br />
          <br />
          Clay Music
          <br />
          P. O. Box 5451
          <br />
          Diamond Bar, CA 91765-7451
          <br />
          <br />
          我們將會於明年一月寄發美國抵稅收據. 願神親自報答您!
          <br />
          <div className="flex mt-10">
            <div className="flex hover:bg-blue-200 items-center space-x-7 p-2 border border-blue-200 rounded-md cursor-pointer">
              <img className="w-10 mr-3" src="/images/icon-paypal.svg" />
              我要奉獻 / Donation Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supportus;
