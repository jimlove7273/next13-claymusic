import React from 'react';

const FooterBottom = () => {
  return (
    <div className="bg-[#5b646b] text-gray-300 font-thin text-sm py-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row text-center justify-between items-center">
          <div className="flex space-x-2 mb-3 md:mb-0">
            <img src="/images/footer-amex.png" />
            <img src="/images/footer-visa.png" />
            <img src="/images/footer-mc.png" />
            <img src="/images/footer-paypal.png" />
          </div>
          <div>&copy; 2004-2023 Clay Music, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
