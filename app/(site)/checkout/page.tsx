'use client';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Loading from '@/components/Loading/Loading';
import dynamic from 'next/dynamic';
import BillingAddress from '@/components/Checkout/BillingAddress';
import ShippingAddress from '@/components/Checkout/ShippingAddress';
import Confirm from '@/components/Checkout/Confirm';
import { useCheckout } from '@/store/checkOutStore';

const CartDetails = dynamic(
  () => import('@/components/CartPanel/CartDetails'),
  {
    loading: () => <Loading />, // Placeholder while component is loading
    ssr: false, // Set to false to prevent server-side rendering of this component
  },
);

const CheckOutScreen = () => {
  const checkoutStep = useCheckout((state) => state.checkoutStep);
  console.log('** checkoutStep', checkoutStep);

  return (
    <div className="flex flex-col-reverse md:flex-row w-full mx-auto my-10 gap-10">
      <div className="flex-1">
        <div className="border border-gray-300 mb-5">
          <div className="flex justify-between bg-gray-200 p-2 font-bold">
            <div>Billing Address:</div>
            <div>
              <IoIosArrowDown size={20} />
            </div>
          </div>
          <div>
            <BillingAddress />
          </div>
        </div>
        <div className="border border-gray-300 mb-5">
          <div className="flex justify-between bg-gray-200 p-2 font-bold">
            <div>Shipping Address:</div>
            <div>
              <IoIosArrowDown size={20} />
            </div>
          </div>
          <div className={`${checkoutStep < 1 ? 'hidden' : ''}`}>
            <ShippingAddress />
          </div>
        </div>
        <div className="border border-gray-300">
          <div className="flex justify-between bg-gray-200 p-2 font-bold">
            <div>Confirm:</div>
            <div>
              <IoIosArrowDown size={20} />
            </div>
          </div>
          <div className={`${checkoutStep < 2 ? 'hidden' : ''}`}>
            <Confirm />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <CartDetails />
      </div>
    </div>
  );
};

export default CheckOutScreen;
