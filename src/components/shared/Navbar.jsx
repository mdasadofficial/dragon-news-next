import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <div className="flex container mx-auto justify-between">
      <div></div>
      <ul className="flex justify-between items-center gap-4">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center justify-between gap-4">
        <Image  src={userAvatar} alt="User Avatar" width={60} height={60} />
        <button className="btn  bg-violet-600 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
