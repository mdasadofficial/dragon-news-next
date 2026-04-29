import React from "react";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-violet-600">
          Career Opportunities
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-600 text-lg">
          Join our team and build your future with us 🚀
        </p>

        {/* Job List */}
        <div className="space-y-6">

          {/* Job 1 */}
          <div className="border p-6 rounded-xl hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-violet-500">
              Frontend Developer
            </h2>
            <p className="text-gray-600 mt-2">
              We are looking for a skilled React/Next.js developer who can build modern web applications.
            </p>
            <button className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
              Apply Now
            </button>
          </div>

          {/* Job 2 */}
          <div className="border p-6 rounded-xl hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-violet-500">
              Digital Marketer
            </h2>
            <p className="text-gray-600 mt-2">
              Looking for an experienced Digital Marketer with knowledge of Facebook Ads & SEO.
            </p>
            <button className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
              Apply Now
            </button>
          </div>

          {/* Job 3 */}
          <div className="border p-6 rounded-xl hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-violet-500">
              Video Editor
            </h2>
            <p className="text-gray-600 mt-2">
              Need a creative Video Editor for YouTube and social media content.
            </p>
            <button className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
              Apply Now
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-gray-500">
            Send your CV to: <span className="font-semibold">your@email.com</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CareerPage;