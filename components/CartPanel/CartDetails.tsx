'use client';
import { useCartStore } from '../../store/cartStore';
import Image from 'next/image';

const CartDetails = () => {
  const { cart, cartTotalAmount } = useCartStore();

  return (
    <>
      <div className="text-xl font-bold text-center text-blue-900 mt-4">
        購物車 / Shopping Cart
      </div>
      <div className="mt-5">
        {cart.map((item, i) => {
          return (
            <div key={i}>
              <div className="flex text-gray-600">
                <div className="mr-2 max-w-[50px]">
                  {item.productType === 'CD' && (
                    <Image
                      className="h-[45px]"
                      src={`/images/album/${item.productCover}.jpeg`}
                      width={50}
                      height={45}
                      alt="CD"
                    />
                  )}
                  {item.productType === 'SB' && (
                    <Image
                      className="h-[60px]"
                      src={`/images/album/${item.productCover}.jpeg`}
                      width={50}
                      height={60}
                      alt="Song Book"
                    />
                  )}
                  {item.productType === 'MP3' && (
                    <img src="/images/icon-mp3.png" alt="MP3" />
                  )}
                </div>
                <div className="w-full">
                  <div className="text-xs w-[200px] mb-1">
                    <span className="truncate block">{item.product}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
                      <div className="flex items-center bg-white rounded-md">
                        <span className="px-1">{item.quantity}</span>
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
                ${cartTotalAmount.toFixed(2)}
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
    </>
  );
};

export default CartDetails;
