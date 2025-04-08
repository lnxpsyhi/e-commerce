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
import { Ellipsis, Lock, Package, ShoppingBasketIcon } from "lucide-react";
import useBasketStore from "@/app/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import GShock from "./GShock";

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

  const router = useRouter();

  return (
    <header className="bg-black flex items-center flex-row">
      <div className="grid grid-cols">
        <div className="flex justify-center">
          <Link href="/">
            <GShock />
          </Link>

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

          <ClerkLoaded>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => router.push("/basket")}>
                    <ShoppingBasketIcon />
                    <span>My Basket</span>
                    <Badge>{itemCount}</Badge>
                  </DropdownMenuItem>
                  <SignedIn>
                    <DropdownMenuItem onClick={() => router.push("/orders")}>
                      <Package />
                      <span>My Orders</span>
                    </DropdownMenuItem>
                  </SignedIn>
                </DropdownMenuGroup>
                <SignedIn>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={createClerkPassKey}>
                      <Lock />
                      <span>Create passkey</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </SignedIn>
              </DropdownMenuContent>
            </DropdownMenu>
          </ClerkLoaded>
        </div>

        <Form action="/search" className="flex gap-x-2 m-2">
          <Input type="text" name="query" placeholder="Search for products" />
          <Button type="submit">Search</Button>
        </Form>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
