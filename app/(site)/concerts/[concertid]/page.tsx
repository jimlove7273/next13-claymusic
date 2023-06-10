import { parseDate, monthNumtoStr } from '@/functions/utilities';
import { getConcerts } from '@/sanity/sanity-utils';

const Concerts = async () => {
  const concerts = await getConcerts();

  return (
    <>
      <div className="relative w-full container mx-auto my-8 p-3 -z-20">
        <div className="text-2xl font-bold">Clay Music Concerts</div>
        <div className="mb-5">Single Concert</div>
        <div>&nbsp;</div>

        <div className="bg-[url('/images/concert.jpg')] bg-cover bg-center w-[95%] sm:w-[80%] md:w-[90%] mx-auto">
          <div className="p-5 md:py-20 md:px-40 w-full h-full flex backdrop-brightness-50 text-gray-200">
            <div className="grid gap-2 md:grid-cols-2 md:gap-3 md:text-xl">
              <div className="font-bold">日期:</div>
              <div className="text-amber-50 md:text-gray-200">
                2023-05-14 (Sunday)
              </div>
              <div className="font-bold">時間:</div>
              <div className="text-amber-50 md:text-gray-200">2:00pm</div>

              <div className="font-bold">場地:</div>
              <div className="text-amber-50 md:text-gray-200">
                南安普敦華人基督教會
              </div>
              <div className="font-bold">地址:</div>
              <div className="text-amber-50 md:text-gray-200">
                Portswood Church, Portswood Rd. Southampton, SO17 2FY
              </div>
              <div></div>
              <div className="text-amber-50 md:text-gray-200">-</div>
              <div className="font-bold">聯絡人:</div>
              <div className="text-amber-50 md:text-gray-200">衛志光傳道</div>
              <div className="font-bold">聯絡電話:</div>
              <div className="text-amber-50 md:text-gray-200">-</div>
              <div className="font-bold">聯絡Email:</div>
              <div className="text-amber-50 md:text-gray-200">-</div>
              <div className="font-bold">細節:</div>
              <div className="text-amber-50 md:text-gray-200">-</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concerts;
