import { parseDate, monthNumtoStr } from '@/functions/utilities';
import { getConcerts } from '@/sanity/sanity-utils';

const Concerts = async () => {
  const concerts = await getConcerts();

  return (
    <>
      <div className="container mx-auto my-8 p-3">
        <div className="text-2xl font-bold">Clay Music Concerts</div>
        <div className="mb-5">This Year Concerts</div>
        <div>&nbsp;</div>

        {concerts.map((concert) => {
          let concertDate = parseDate(concert.date);
          return (
            <>
              <div className="w-full">
                <div className="flex w-full justify-between items-center gap-4 mx-auto px-4 py-2 border-b">
                  <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
                    <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 items-center text-center text-green-600">
                      <div className="block text-2xl font-bold">
                        {concertDate.day}
                      </div>
                      <div className="text-sm">
                        {monthNumtoStr(concertDate.month, 'full')}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold mb-1 text-[18px] text-gray-600 sm:text-xl">
                        {concert.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {concertDate.time} :: {concert.venue}
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-600 text-white text-[14px] py-1 px-3 rounded-md cursor-pointer">
                    Details
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Concerts;
