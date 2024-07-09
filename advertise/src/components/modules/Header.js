"use client";

import Link from "next/link";
import Logo from "../../../public/Logo";
import SearchModal from "./SearchModal";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 shadow rounded-2xl mb-6">
      <Link href="/" className="flex items-center gap-2">
        <Logo />
        <p className="text-2xl text-violet-400">Advertise</p>
      </Link>
      <SearchModal />
      <Link
        href="/signin"
        className="bg-violet-600 text-white py-3 px-6 rounded-lg shadow shadow-violet-400"
      >
        Signup / Login
      </Link>
    </div>
  );
};

export default Header;
