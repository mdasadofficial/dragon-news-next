import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCards from "@/components/homepage/news/NewsCards";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";


const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className=" grid grid-cols-12 gap-5 container mx-auto my-[60px]">
      <div className=" col-span-3 ">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className=" text-3xl col-span-6">
        {" "}
        <h2 className="font-bold text-lg">News by category</h2>
        <div className="space-y-4 mt-6">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <NewsCards key={n._id} news={n}>
                  
                </NewsCards>
              );
            })
          ) : (
            <h2 className="text-2xl font-semibold text-gray-700 text-center mt-10">
              📰 No News Found!
            </h2>
          )}
        </div>
      </div>
      <div className=" col-span-3">
        {" "}
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
