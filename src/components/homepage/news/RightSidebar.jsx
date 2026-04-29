import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const RightSidebar = () => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500">
          {" "}
          <FcGoogle /> Login With Google
        </button>
        <button className="btn">
          {" "}
          <ImGithub />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
