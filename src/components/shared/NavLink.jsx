"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
//   console.log("PathName", pathname);
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`${isActive ? "btn border-b-2 border-b-violet-600 " : " "}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
