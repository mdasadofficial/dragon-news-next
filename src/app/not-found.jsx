import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-900 text-white text-center">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-3xl mt-2">Page Not Found</h2>
      <p className="mt-2 text-gray-400">
        আপনি যে পেজটি খুঁজছেন, সেটি পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="mt-5 px-5 py-2 bg-sky-400 text-black rounded-lg font-semibold hover:bg-sky-300 transition"
      >
        হোমে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;
