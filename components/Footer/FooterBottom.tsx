import React from 'react';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#5b646b] text-gray-300 font-thin text-sm py-5">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row text-center justify-between items-center">
          <div className="flex space-x-2 mb-3 md:mb-0">
            <img src="/images/footer-amex.png" alt="American Express" />
            <img src="/images/footer-visa.png" alt="Visa" />
            <img src="/images/footer-mc.png" alt="MasterCard" />
            <img src="/images/footer-paypal.png" alt="PayPal" />
          </div>
          <div>&copy; 2004-{currentYear} Clay Music, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
