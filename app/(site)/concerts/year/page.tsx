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
              <div className="flex flex-col md:flex-row justify-between hover:bg-blue-50  items-center py-2  border-t border-gray-300">
                <div className="flex justify-between w-full md:w-2/3">
                  <div className="flex flex-col md:flex-row items-end">
                    <div className="text-3xl font-bold ml-4 mr-2">
                      {concertDate.day}
                    </div>
                    <div className="text-base mx-auto">
                      {monthNumtoStr(concertDate.month, 'short')}
                    </div>
                  </div>
                  <div className="text-sm">
                    {concert.name}
                    <br />
                    {concertDate.time} @ {concert.venue}
                  </div>
                </div>
                <div className="text-sm rounded-md border md:my-0 mt-4 py-2 md:py-0 mb-2 hover:bg-gray-500 hover:text-white cursor-pointer border-gray-500 px-2 mr-4">
                  Details
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
