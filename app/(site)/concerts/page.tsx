import { parseDate, monthNumtoStr } from '@/functions/utilities';
import { getConcerts } from '@/sanity/sanity-utils';
import Link from 'next/link';

const Concerts = async () => {
  const concerts = await getConcerts();

  return (
    <>
      <div className="container mx-auto my-8 p-3">
        <div className="text-2xl font-bold">Clay Music Concerts</div>
        <div className="mb-5">Upcoming Concerts</div>
        <div>&nbsp;</div>

        {concerts.map((concert) => {
          let concertDate = parseDate(concert.date);
          return (
            <>
              <div className="flex flex-row justify-between hover:bg-blue-50  items-center py-2  border-t border-gray-300">
                <div className="flex flex-col md:flex-row items-center md:items-end w-20">
                  <div className="text-3xl font-bold ml-4 mr-2">
                    {concertDate.day}
                  </div>
                  <div className="text-base mx-auto">
                    {monthNumtoStr(concertDate.month, 'short')}
                  </div>
                </div>
                <div className="flex ml-5 justify-start flex-col md:flex-row md:justify-between items-start md:items-center w-full md:w-2/3">
                  <div className="text-sm">
                    {concert.name}
                    <br />
                    {concertDate.time} @ {concert.venue}
                  </div>

                  <Link
                    href="/concerts/check"
                    className="text-sm rounded-md border py-1 mt-4 mb-2 hover:bg-gray-500 hover:text-white cursor-pointer border-gray-500 px-2 mr-4"
                  >
                    Details
                  </Link>
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
