"use client"

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Glass Card */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col items-center shadow-2xl">

        {/* Animated Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-sky-400/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-lg font-semibold tracking-wide animate-pulse">
          Loading...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-300 mt-2">
          Please wait a moment 🚀
        </p>

        {/* Progress Bar */}
        <div className="w-40 h-1 bg-gray-700 rounded-full mt-5 overflow-hidden">
          <div className="h-full bg-sky-400 animate-[loading_1.5s_infinite]"></div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;