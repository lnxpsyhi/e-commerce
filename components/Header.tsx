"use client";

import React from "react";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { Package, ShoppingBasketIcon } from "lucide-react";
import useBasketStore from "@/app/store";
import { Badge } from "./ui/badge";

const Header = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const createClerkPassKey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (e) {
      console.error("Error: ", JSON.stringify(e, null, 2));
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-black hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          G-SHOCK
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 sm:mt-0  flex-1">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            <ShoppingBasketIcon className="w-6 h-6" />
            {itemCount <= 0 || (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
            <span>My Basket</span>
            {/* {itemCount <= 0 || <Badge>{itemCount}</Badge>} */}
          </Link>

          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                <Package className="w-6 h-6" />
                <span>My Orders</span>
              </Link>
            </SignedIn>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome back</p>
                  <p className="font-bold">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            {user?.passkeys.length == 0 && (
              <button
                onClick={createClerkPassKey}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Create a passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
