import React from "react";
import Vector from "../../../public/Vector.png";
import Cards from "./Cards";
const BlogPage = () => {
  return (
    <>
      <div className="max-w-[1340px] m-auto mb-4 mt-10">
        <div className="h-[770px] bg-white">
          <div className="w-full text-center pt-4">
            <h1 className="text-6xl font-bold text-[rgb(0,0,0,0.8)]">Blog</h1>
            <div className="flex justify-center items-center">
              <img src={Vector} />
            </div>
            <div className="mt-4">
              <p className="text-xl font-medium text-[rgb(0,0,0,0.5)]">
                Encuentra artículos relacionados con tu sector y mantente
                informado sobre las últimas noticias
              </p>
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
