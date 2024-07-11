"use client";

import Link from "next/link";
import Logo from "../../../public/Logo";
import SearchModal from "./SearchModal";
import { signOut, useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const Header = () => {
  const { status } = useSession();

  const signoutHandler = async () => {
    await signOut();
  };

  return (
    <div className="flex items-center justify-between p-5 shadow rounded-2xl mb-6">
      <Link href="/advertises" className="flex items-center gap-2">
        <Logo />
        <p className="text-2xl text-violet-400">Advertise</p>
      </Link>

      {/* <SearchModal /> */}
      {status === "authenticated" ? (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              className="cursor-pointer"
              showFallback
              size="lg"
              src="https://images.unsplash.com/broken"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem className="h-11" key="dashboard">
              <Link href="/dashboard">Dashboard</Link>
            </DropdownItem>
            <DropdownItem className="h-11" key="copy">
              <Button
                onClick={signoutHandler}
                className="w-full p-0 text-left justify-start"
                variant="light"
              >
                SignOut
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Link
          href="/signin"
          className="bg-violet-600 text-white py-3 px-6 rounded-lg shadow shadow-violet-400"
        >
          Signup / Login
        </Link>
      )}
    </div>
  );
};

export default Header;
