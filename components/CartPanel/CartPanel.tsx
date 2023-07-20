'use client';
import React, { useEffect, useRef } from 'react';
import { useCartStore } from '../../store/cartStore';
import { IoClose } from 'react-icons/io5';
import { BsTrash } from 'react-icons/bs';
import './cartPanel.css';

export const CartPanel = ({ showCartPanel, setShowCartPanel }: any) => {
  const ref = useRef(null);
  const {
    cart,
    cartTotalAmount,
    cartCalculator,
    updateQuantity,
    removeFromCart,
  } = useCartStore();

  /**
   * Run the shopping cart calculator upon entering the page
   */
  useEffect(() => {
    cartCalculator();
  }, []);

  const removingFromCart = (itemNumber: string) => {
    if (confirm('Are you sure you want to deleting this record?')) {
      removeFromCart(itemNumber);
      cartCalculator();
    }
  };

  return (
    <>
      <div
        className={`${
          showCartPanel ? 'absolute z-10' : 'hidden'
        } top-0 left-0 w-full h-screen bg-gray-900/60`}
        onClick={() => setShowCartPanel(false)}
      >
        &nbsp;
      </div>
      <div
        id="cartPanel"
        ref={ref}
        className={`z-10 absolute top-0 right-0 h-full transition-all duration-300 bg-stone-100 p-3
      ${showCartPanel ? '' : 'translate-x-full'}
      shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
      >
        <div className="flex justify-end">
          <button onClick={(e) => setShowCartPanel(false)}>
            <IoClose size={30} />
          </button>
        </div>
        <div className="text-xl font-bold text-center text-blue-900 mt-4">
          購物車 / Shopping Cart
        </div>
        <div className="mt-5">
          {cart.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex text-gray-600">
                  <div
                    className="flex items-center"
                    onClick={() => removingFromCart(item.itemNumber)}
                  >
                    <BsTrash
                      size={18}
                      className="text-red-900 font-bold mr-2"
                    />
                  </div>
                  <div className="mr-2 max-w-[50px]">
                    {item.productType === 'CD' && (
                      <img src="/images/icon-cd.png" alt="MP3" />
                    )}
                    {item.productType === 'SB' && (
                      <img src="/images/icon-sb.png" alt="MP3" />
                    )}
                    {item.productType === 'MP3' && (
                      <img src="/images/icon-mp3.png" alt="MP3" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs w-[200px] mb-1">
                      <span className="truncate block">{item.product}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
                        <div className="flex items-center bg-white rounded-md">
                          <button
                            className="px-2 py-0"
                            onClick={() => {
                              updateQuantity(item.id, 'decrease');
                              cartCalculator();
                            }}
                          >
                            -
                          </button>
                          <span className="px-1">{item.quantity}</span>
                          <button
                            className="px-2 py-0"
                            onClick={() => {
                              updateQuantity(item.id, 'increase');
                              cartCalculator();
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-1 text-[12px]">x ${item.price}</div>
                      </div>
                      <div className="text-md font-bold">
                        ${(item.quantity * item.price).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            );
          })}

          {cartTotalAmount > 0 ? (
            <div className="text-sm text-neutral-600">
              <div className="flex justify-end items-center my-1">
                <span className="mr-2 font-bold">Sub Total:</span>
                <span className="font-bold text-xl">
                  {cartTotalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-[12px] py-5 text-center bg-white shadow">
              There is nothing in
              <br />
              the Shopping Cart
            </div>
          )}
        </div>
        <div>
          <div className="mt-10 bg-orange-600 text-white text-center p-2 rounded-full cursor-pointer">
            Check Out
          </div>
        </div>
      </div>
    </>
  );
};
