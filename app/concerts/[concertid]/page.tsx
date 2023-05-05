import React from 'react';

const Concerts = () => {
  return (
    <>
      <div className="container mx-auto my-8 p-3">
        <div className="text-2xl font-bold">Clay Music Concerts</div>
        <div className="mb-5">January 2024</div>
        <div>&nbsp;</div>

        <div className="flex flex-col md:flex-row justify-between hover:bg-blue-50  items-center py-2  border-t border-gray-300">
          <div className="flex justify-between w-full md:w-2/3">
            <div className="flex flex-col md:flex-row items-end">
              <div className="text-3xl font-bold ml-4 mr-2">21</div>
              <div className="text-base mx-auto">Jan</div>
            </div>
            <div className="text-sm">
              泥土音樂歐洲巡迴 (Rome. Italy)
              <br />
              11:00am @ 羅馬東區教會
            </div>
          </div>

          <div className="text-sm border md:my-0 mt-4 py-2 md:py-0 mb-2  hover:bg-gray-500 hover:text-white cursor-pointer border-gray-500 px-2 mr-4">
            Details
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between hover:bg-blue-50  items-center py-2  border-t border-gray-300">
          <div className="flex justify-between w-full md:w-2/3">
            <div className="flex flex-col md:flex-row items-end">
              <div className="text-3xl font-bold ml-4 mr-2">22</div>
              <div className="text-base mx-auto">Jan</div>
            </div>
            <div className="text-sm">
              泥土音樂歐洲巡迴 (Rome. Italy)
              <br />
              11:00am @ 羅馬東區教會
            </div>
          </div>
          <div className="text-sm border md:my-0 mt-4 py-2 md:py-0 mb-2  hover:bg-gray-500 hover:text-white cursor-pointer border-gray-500 px-2 mr-4">
            Details
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between hover:bg-blue-50  items-center py-2  border-t border-gray-300">
          <div className="flex justify-between w-full md:w-2/3">
            <div className="flex flex-col md:flex-row items-end">
              <div className="text-3xl font-bold ml-4 mr-2">23</div>
              <div className="text-base mx-auto">Jan</div>
            </div>
            <div className="text-sm">
              泥土音樂歐洲巡迴 （London, UK)
              <br />
              2:00pm @ 以琳全備福音教會
            </div>
          </div>
          <div className="text-sm border md:my-0 mt-4 py-2 md:py-0 mb-2  hover:bg-gray-500 hover:text-white cursor-pointer border-gray-500 px-2 mr-4">
            Details
          </div>
        </div>
      </div>
    </>
  );
};

export default Concerts;
