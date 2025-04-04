"use client";

import useBasketStore from "@/app/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 ">
      <div className="bg-white p-12 rounded-xl shadown-lg max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
              <h1 className="text-4xl font-bold mb-6 text-center">
                Thank you for your order!
              </h1>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
