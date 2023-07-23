import React from 'react';

const Confirm = () => {
  return (
    <div className="p-4">
      <button className="w-full mt-3 flex flex-col">
        <div className="mb-4 text-left text-sm text-gray-500">
          Please confirm your information on this order, when you are ready, you
          may proceed to Payment by clicking the following button.
        </div>
        <div className="w-full text-sm flex justify-end">
          <div className="px-5 py-2 bg-gray-900 text-white">
            CONTINUE TO PAYMENT
          </div>
        </div>
      </button>
    </div>
  );
};

export default Confirm;
