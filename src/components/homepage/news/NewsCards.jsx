import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmarkCheck, CiShare2 } from "react-icons/ci";
import { IoMdStarHalf } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

const NewsCards = ({ news }) => {
  console.log(news, "news");

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        {/* Author Info */}
        <div className="flex justify-between items-center  bg-slate-200 p-4">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <CiShare2 className="text-xl" />
            <CiBookmarkCheck className="text-xl" />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>

        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <p className="line-clamp-3">{news.details}</p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center  gap-2">
            <h2 className="flex items-center  gap-2">
              <IoMdStarHalf className="text-yellow-500"/>
              {news.rating.number}
            </h2>
            <h2 className="flex items-center  gap-2">
              <IoEyeSharp />
              {news.total_view}
            </h2>
          </div>
          <Link href={`/news/${news._id}`}>
            {" "}
            <button className=" btn text-red-600">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
