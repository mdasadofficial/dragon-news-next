// import { MutableRequestCookiesAdapter } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: "1",
    title: "Breaking News: Government Announces New Education Policy",
  },
  {
    id: "2",
    title: "Breaking News: Tech Industry Sees Rapid Growth in 2026",
  },
  {
    id: "3",
    title: "Breaking News: Global Climate Change Summit Held This Week",
  },
  {
    id: "4",
    title: "Breaking News: Stock Market Hits Record High",
  },
];

const BreakingNews = () => {
  return (
    <div className=" flex justify-between items-center gap-4 bg-gray-200 py-4 px-2 container mx-auto">
      <button className="btn bg-violet-600 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={80}>
        {news.map((n) => {
          return <span key={n.id}> {n.title}</span>;
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
