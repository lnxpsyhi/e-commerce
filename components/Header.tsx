"use client";

import React from "react";
import {
  ClerkLoaded,
  // SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import {
  // Ellipsis,
  // Lock,
  Package,
  Search,
  ShoppingBasketIcon,
} from "lucide-react";
import useBasketStore from "@/app/store";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import GShock from "./GShock";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Header = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  // const createClerkPassKey = async () => {
  //   try {
  //     const response = await user?.createPasskey();
  //     console.log(response);
  //   } catch (e) {
  //     console.error("Error: ", JSON.stringify(e, null, 2));
  //   }
  // };

  const router = useRouter();

  return (
    <header className="grid grid-cols-2 bg-black p-2 items-center">
      <div className="">
        <Link href="/">
          <GShock />
        </Link>
      </div>

      <div className="w-full flex items-center justify-between md:justify-end md:gap-x-2">
        <Popover>
          <PopoverTrigger>
            <Search className="w-4 h-4" color="white" />
          </PopoverTrigger>
          <PopoverContent>
            <Form action="/search" className="flex gap-x-2 m-2">
              <Input
                type="text"
                name="query"
                placeholder="Search for products"
              />
              <Button type="submit">Search</Button>
            </Form>
          </PopoverContent>
        </Popover>

        <ClerkLoaded>
          <div className="relative flex justify-center">
            <Button
              className="inline-grid place-items-center align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm rounded-md shadow-sm hover:shadow-md"
              variant="link"
              onClick={() => router.push("/basket")}
            >
              <ShoppingBasketIcon color="white" />
              <span className="absolute -top-0.5 -right-1 px-1.5 py-0.5 text-xs text-white leading-none grid place-items-center bg-red-600">
                {itemCount}
              </span>
            </Button>
          </div>

          <Button variant="link" onClick={() => router.push("/orders")}>
            <Package color="white" />
          </Button>

          {user ? (
            <UserButton />
          ) : (
            <div className="w-full max-w-16 text-center bg-white box-border">
              <SignInButton mode="modal" />
            </div>
          )}
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
