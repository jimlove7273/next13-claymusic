import React, { useState, useEffect, useRef } from 'react';
import './cartPanel.css';

export const CartPanel = ({ showCartPanel, setShowCartPanel }: any) => {
  const ref = useRef(null);

  const [cartItems, setCartItems] = useState([
    {
      sku: 'mp0301',
      name: 'MP3 - Let The World See Hope 讓世界看見希望',
      qty: 1,
      price: 0.99,
    },
    {
      sku: 'mp0104',
      name: 'MP3 - Freedom 自由',
      qty: 1,
      price: 0.99,
    },
    {
      sk: 'mp0105',
      name: 'MP3 - Open the Darkest Corner 打開黑暗的角落',
      qty: 1,
      price: 0.99,
    },
  ]);

  let cartSum = 0;

  useEffect(() => {
    const handleOutSideClick = (e: any) => {
      e.preventDefault();
      if (ref.current && !!(ref.current as HTMLElement).contains(e.target)) {
        setShowCartPanel(false);
      }
    };
    window.addEventListener('mousedown', handleOutSideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <div
      id="cartPanel"
      ref={ref}
      className={`absolute top-0
      ${showCartPanel ? 'right-0' : '-right-[320px]'}
      h-full transition-all duration-300 bg-stone-100 p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
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
      <div className="text-xl font-bold text-center text-blue-900 mt-4">
        購物車 / Shopping Cart
      </div>
      <div className="mt-5">
        {cartItems.map((item, i) => {
          cartSum += item.qty * item.price;

          return (
            <>
              <div className="flex text-gray-600" key={i}>
                <div className="flex items-center">
                  <embed
                    src="/images/item-delete.svg"
                    width="30"
                    height="30"
                    type="image/svg+xml"
                  />
                </div>
                <div className="mr-2 max-w-[50px]">
                  <img src="/images/icon-mp3.png" alt="MP3" />
                </div>
                <div>
                  <div className="text-xs w-[200px] mb-1">
                    <span className="truncate block">{item.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
                      <div className="flex border border-gray-200 items-center">
                        <button className="px-2 py-0 border border-r-gray-200">
                          -
                        </button>
                        <span className="px-1">{item.qty}</span>
                        <button className="px-2 py-0 border border-l-gray-200">
                          +
                        </button>
                      </div>
                      &nbsp;x ${item.price}
                    </div>
                    <div className="text-md font-bold">$0.99</div>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
            </>
          );
        })}

        <div className="text-sm text-neutral-600">
          <div className="flex justify-end items-center my-1">
            <span className="mr-2 font-bold">Sub Total:</span>
            <span className="font-bold text-xl">
              {cartSum.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 bg-orange-600 text-white text-center p-2 rounded-full cursor-pointer">
          Check Out
        </div>
      </div>
    </div>
  );
};
