import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";
const Header = () => {
  return (
    <div>
      <div className="text-center py-8 space-y-4">
        <Image
          src={logo}
          width={300}
          height={200}
          alt="Logo"
          className="mx-auto"
        />
        <p>Journalism Without Fear or Favour</p>
        <p>Date: {format(new Date(), "EEEE, MMM dd-yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
