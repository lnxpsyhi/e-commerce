import getActiveSaleByCouponCode from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import React from "react";
import { CouponCodes } from "@/sanity/lib/sales/couponCodes";

const SaleBanner = async () => {
  const sale = await getActiveSaleByCouponCode(CouponCodes.BlackFriday);

  if (!sale?.isActive) {
    return null;
  }
  return (
    <div className="w-full bg-gradient-to-r from-purple-800 to-black text-white p-10 mx-4 mt-2 mb-2 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
            {sale.title}
          </h2>
          <p className="text-left text-xl sm:text-3xl font-semibold mb-6">
            {sale.description}
          </p>

          <div className="flex">
            <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
              <span className="font-bold text-base sm:text-xl">
                Use code: <span>{sale.couponCode}</span>
              </span>
              <span className="ml-2 font-bold text-base sm:text-xl">
                for {sale.discountAmount}% OFF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
