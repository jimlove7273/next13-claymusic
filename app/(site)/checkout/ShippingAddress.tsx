'use client';
import React from 'react';
import { useCheckout } from '../../../store/checkOutStore';

const ShippingAddress = () => {
  const enteredBilling = useCheckout((state) => state.enteredBilling);

  return (
    <div className="p-4 text-gray-600">
      {enteredBilling ? (
        <div>
          John Doe
          <br />
          120 South Dyson Avenue
          <br />
          Jameson, TX 45506
        </div>
      ) : (
        <div>
          <input
            className="w-[calc(50%-4px)] border border-gray-200 p-1 mb-1 mr-2"
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <input
            className="w-[calc(50%-4px)] border border-gray-200 p-1 mb-1"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="company_name"
            placeholder="Company Name"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="address"
            placeholder="Address"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="address2"
            placeholder="Address 2"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="city"
            placeholder="City"
          />
          <select
            className="w-[calc(32%)] border border-gray-200 p-1 mr-2"
            name="country"
          >
            <option>USA</option>
          </select>
          <select
            className="w-[calc(32%)] border border-gray-200 p-1 mr-2"
            name="state"
          >
            <option>California</option>
          </select>
          <input
            className="w-[calc(32%-1px)] border border-gray-200 p-1 mr-2"
            type="text"
            name="zipcode"
            placeholder="Zip Code"
          />
          <input
            className="w-full border border-gray-200 p-1 my-1"
            type="text"
            name="phone"
            placeholder="Phone"
          />
          <br />
          <button className="w-full mt-3 flex justify-end">
            <div className="px-5 py-2 bg-gray-900 text-white text-sm">
              CONTINUE TO PAYMENT
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShippingAddress;
