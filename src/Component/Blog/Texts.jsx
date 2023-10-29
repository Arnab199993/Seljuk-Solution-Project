import React, { useState } from "react";
import Comment from "../../../public/Comment.png";
import ThumbsUp from "../../../public/ThumbsUp.png";
import Share from "../../../public/Share.png";
import { GoShareAndroid } from "react-icons/go";
import { GrShare } from "react-icons/gr";
import "./Texts.css";
const Texts = () => {
  const [hoverShare, setHoverShare] = useState(false);

  const handleHover = () => {
    setHoverShare((prev) => !prev);
  };
  const handleLeave = () => {
    setHoverShare(false);
  };

  return (
    <>
      <div className="w-[328px] h-[249px] m-auto mt-4 ">
        <div className=" border-b-2 pb-2">
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">Title of blog post</h2>
          </div>
          <p className="text-[rgb(0,0,0,0.5)] font-medium">
            Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque
            mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis
            posuere turpis turpis, nec mollis nulla tincidunt sodales.
          </p>
          <div className="flex mt-2">
            <p className="rounded-full border border-[rgb(0,0,0,0.3)] w-[84px] h-[22px] flex justify-center items-center text-sm text-gray-500 ">
              Pill labels
            </p>
            <p className="rounded-full border border-[rgb(0,0,0,0.3)] w-[84px] h-[22px] flex justify-center items-center text-sm text-gray-500 ml-3">
              Pill labels
            </p>
            <p className="rounded-full border border-[rgb(0,0,0,0.3)] w-[84px] h-[22px] flex justify-center items-center text-sm text-gray-500 ml-3">
              Pill labels
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-4 w-[45%]">
            <div className="flex justify-between">
              <div className="flex">
                <img src={Comment} />
                <p className="text-[rgb(0,0,0,0.6)]">123</p>
              </div>
              <div className="flex">
                <img src={ThumbsUp} />
                <p className="text-[rgb(0,0,0,0.6)]">340</p>
              </div>
            </div>
          </div>
          <div className="mt-2 ">
            <button
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="flex border-2 border-[rgb(0,0,0,0.8)] w-[130px] transition-all ease-in-out delay-150   py-1  justify-center items-center rounded-md hover:bg-[rgb(0,0,0,0.8)] hover:text-[white] hover:border-transparent"
            >
              <p>Compartir</p>
              {hoverShare ? (
                <span className="ml-1 text-gray-600 text-xl">
                  <GoShareAndroid />
                </span>
              ) : (
                <img src={Share} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Texts;
