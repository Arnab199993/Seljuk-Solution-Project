import React from "react";
import CardVideo from "../../../public/CardVideo.png";
import Model from "../../../public/Model.png";
import Italy from "../../../public/Italy.png";
import HalfStar from "../../../public/HalfStar.png";
import FillStar from "../../../public/FillStar.png";
import EmptyStar from "../../../public/EmptyStar.png";
import Texts from "./Texts";
const Cards = () => {
  return (
    <div className=" max-w-[1180px] m-auto">
      <div className="  mt-10 flex justify-between">
        <div className="h-[560px] w-[368px] border shadow-md overflow-hidden object-contain relative ">
          <img src={CardVideo} className="absolute" />
          <img
            src={Model}
            className="absolute mt-[12.4rem] ml-4 rounded-full"
          />
          <div className="flex ">
            <div className="mt-[14.5rem] ml-[4.5rem] font-bold text-lg text-[rgb(0,0,0,0.7)]">
              Cristian Fernández
            </div>
            <div className="mt-[14.9rem] ml-[4.5rem]">
              <img src={Italy} />
            </div>
          </div>
          <div className="ml-[4.5rem]">
            <p className="text-sm text-[rgb(0,0,0,0.6) font-medium]">
              Derecho penal
            </p>

            <div className="text-orange-400 text-lg flex">
              <img src={FillStar} />
              <img src={FillStar} />
              <img src={HalfStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
            </div>
          </div>
          <Texts />
        </div>
        <div className="h-[560px] w-[368px] border shadow-md overflow-hidden object-contain relative ">
          <img src={CardVideo} className="absolute" />
          <img
            src={Model}
            className="absolute mt-[12.4rem] ml-4 rounded-full"
          />
          <div className="flex ">
            <div className="mt-[14.5rem] ml-[4.5rem] font-bold text-lg text-[rgb(0,0,0,0.7)]">
              Cristian Fernández
            </div>
            <div className="mt-[14.9rem] ml-[4.5rem]">
              <img src={Italy} />
            </div>
          </div>
          <div className="ml-[4.5rem]">
            <p className="text-sm text-[rgb(0,0,0,0.6) font-medium]">
              Derecho penal
            </p>

            <div className="text-orange-400 text-lg flex">
              <img src={FillStar} />
              <img src={FillStar} />
              <img src={HalfStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
            </div>
          </div>
          <Texts />
        </div>
        <div className="h-[560px] w-[368px] border shadow-md overflow-hidden object-contain relative ">
          <img src={CardVideo} className="absolute" />
          <img
            src={Model}
            className="absolute mt-[12.4rem] ml-4 rounded-full"
          />
          <div className="flex ">
            <div className="mt-[14.5rem] ml-[4.5rem] font-bold text-lg text-[rgb(0,0,0,0.7)]">
              Cristian Fernández
            </div>
            <div className="mt-[14.9rem] ml-[4.5rem]">
              <img src={Italy} />
            </div>
          </div>
          <div className="ml-[4.5rem]">
            <p className="text-sm text-[rgb(0,0,0,0.6) font-medium]">
              Derecho penal
            </p>

            <div className="text-orange-400 text-lg flex">
              <img src={FillStar} />
              <img src={FillStar} />
              <img src={HalfStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
            </div>
          </div>
          <Texts />
        </div>
      </div>
    </div>
  );
};

export default Cards;
