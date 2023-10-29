import React, { useState } from "react";
import CardVideo from "../../../public/CardVideo.png";
import Model from "../../../public/Model.png";
import Italy from "../../../public/Italy.png";
import HalfStar from "../../../public/HalfStar.png";
import FillStar from "../../../public/FillStar.png";
import EmptyStar from "../../../public/EmptyStar.png";
import Texts from "./Texts";
import { GrShare } from "react-icons/gr";
import "./Cards.css";
const Cards = () => {
  const [cardHover, setCardHover] = useState(false);
  const [cardHoverSecond, setCardHoverSecond] = useState(false);
  const [cardHoverThird, setcardHoverThird] = useState(false);
  const handleHoverEnter = () => {
    setCardHover((prev) => !prev);
  };
  const handleHoverLeave = () => {
    setCardHover(false);
  };
  const handleHoverEnterSecond = () => {
    setCardHoverSecond((prev) => !prev);
  };
  const handleHoverLeaveSecond = () => {
    setCardHoverSecond(false);
  };
  const handleHoverEnterThird = () => {
    setcardHoverThird((prev) => !prev);
  };
  const handleHoverLeaveThird = () => {
    setcardHoverThird(false);
  };

  return (
    <div className=" max-w-[1180px] m-auto">
      <div className="  mt-10 flex justify-between">
        <div
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          className="h-[560px] w-[368px] transition-all ease-out delay-150 border shadow-md overflow-hidden object-contain relative hover:h-[650px] "
        >
          <div className=" overflow-hidden">
            <img
              src={CardVideo}
              className="absolute object-cover transform-gpu scale-100 transition-transform delay-150 ease-in-out hover:transform-gpu hover:scale-125 hover:h-[200px] hover:w-[full]"
            />
          </div>
          <img
            src={Model}
            className="absolute mt-[12.4rem] ml-4 rounded-full"
          />
          <div>
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

              <div className=" flex justify-between">
                <div className="text-orange-400 text-lg flex w-[50%] h-[50%] ">
                  <img src={FillStar} />
                  <img src={FillStar} />
                  <img src={HalfStar} />
                  <img src={EmptyStar} />
                  <img src={EmptyStar} />
                </div>

                {cardHover ? (
                  <div className="bg-[#D80027] h-[5rem] w-[5rem] flex justify-center items-center p-4 mr-4 rounded-lg  text-3xl">
                    <GrShare />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Texts />
          </div>
        </div>
        <div
          onMouseEnter={handleHoverEnterSecond}
          onMouseLeave={handleHoverLeaveSecond}
          className="h-[560px] w-[368px] border shadow-md overflow-hidden object-contain relative hover:h-[650px] transition-all ease-out delay-150"
        >
          <img
            src={CardVideo}
            className="absolute object-cover transform-gpu scale-100 transition-all delay-150 ease-in-out hover:transform-gpu hover:scale-125 hover:h-[200px] hover:w-[full]"
          />
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
            {cardHoverSecond ? (
              <div className="bg-[#D80027] h-[5rem] w-[5rem] flex justify-center items-center p-4 ml-[12.5rem] rounded-lg text-3xl ">
                <GrShare />
              </div>
            ) : (
              ""
            )}
          </div>
          <Texts />
        </div>
        <div
          onMouseEnter={handleHoverEnterThird}
          onMouseLeave={handleHoverLeaveThird}
          className="h-[560px] w-[368px] border shadow-md overflow-hidden object-contain relative  hover:h-[650px] transition-all ease-out delay-150"
        >
          <img
            src={CardVideo}
            className="absolute object-cover transform-gpu scale-100 transition-all delay-150 ease-in-out hover:transform-gpu hover:scale-125 hover:h-[200px] hover:w-[full]"
          />
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
            {cardHoverThird ? (
              <div className="bg-[#D80027] h-[5rem] w-[5rem] flex justify-center items-center p-4 ml-[12.5rem] rounded-lg text-3xl ">
                <GrShare />
              </div>
            ) : (
              ""
            )}
          </div>
          <Texts />
        </div>
      </div>
    </div>
  );
};

export default Cards;
