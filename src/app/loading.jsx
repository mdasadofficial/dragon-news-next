import React from "react";

const loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-900 text-white">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-lg font-medium">লোড হচ্ছে...</p>
    </div>
  );
};

export default loading;
