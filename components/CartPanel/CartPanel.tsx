import React from 'react';

export const CartPanel = ({ showCartPanel, setShowCartPanel }: any) => {
  return (
    <div
      className={`absolute z-10 top-0 ${
        showCartPanel ? 'right-[0px]' : 'right-[-300px]'
      } w-[300px] h-full transition-all duration-300 bg-stone-100 p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
    >
      <div className="flex justify-end">
        <button onClick={(e) => setShowCartPanel(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mb-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="text-xl font-bold text-center mt-4">Shopping Cart</div>
      <div className="mt-5">
        <div className="flex text-gray-600">
          <div className="mr-2">
            <img width="35" src="/images/mp3.png" />
          </div>
          <div>
            <div className="text-xs">
              MP3 - Let The World See Hope 讓世界看見希望
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600">1 x $0.99</div>
              <div className="text-md font-bold">$0.99</div>
            </div>
          </div>
        </div>

        <hr className="my-2" />

        <div className="flex text-gray-600">
          <div className="mr-2">
            <img width="35" src="/images/mp3.png" />
          </div>
          <div>
            <div className="text-xs">
              MP3 - Let The World See Hope 讓世界看見希望
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600">1 x $0.99</div>
              <div className="text-md font-bold">$0.99</div>
            </div>
          </div>
        </div>

        <hr className="border-double my-2" />
        <div className="text-sm text-neutral-600">
          <div className="flex justify-end my-1">
            <span className="mr-2">Sub Total:</span>
            <span>$1.98</span>
          </div>
          <div className="flex justify-end my-1">
            <span className="mr-2">Shipping:&nbsp;</span>
            <span>$0.00</span>
          </div>
          <div className="flex font-bold justify-end my-1">
            <span className="mr-2">Order Total:&nbsp;</span>
            <span>$1.98</span>
          </div>
        </div>
      </div>
    </div>
  );
};
