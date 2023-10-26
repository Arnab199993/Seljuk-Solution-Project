import React from "react";
import { FaRegEye } from "react-icons/fa";
const AuthPage = () => {
  return (
    <>
      <div className="w-[1240px] p-4 m-auto">
        <div className="mt-[49px] ml-[97px]">
          <button className="border border-[#6495ED] w-[199px] h-[53px]  text-2xl font-medium bg-[#6495ED] text-white rounded transition-all ease-in-out delay-150 shadow hover:shadow-[0_0px_40px_#6495ED]">
            BOOK NOW
          </button>
          <button className="w-[199px] h-[53px]  text-2xl font-medium transition-all ease-in-out delay-150 shadow bg-gradient-to-r from-cyan-300 via-indigo-500 to-pink-500 text-white rounded ml-[7rem] hover:shadow-[0_0px_40px_#6495ED]">
            BOOK NOW
          </button>
          <div className="h-[664px] w-[486px] border mt-[4rem] rounded-3xl bg-white">
            <div className="px-8 py-6">
              <h3 className="text-3xl font-medium text-[rgb(0,0,0,0.8)]">
                Registration Form
              </h3>
              <p className="text-lg text-gray-500 font-normal">
                Register your account here
              </p>
              <div className="flex w-full">
                <p className="w-[14rem] border border-[rgb(0,0,0,0.1)] h-0 mt-5"></p>
                <p className="text-2xl px-1">o</p>
                <p className="w-[14rem] border border-[rgb(0,0,0,0.1)] h-0 mt-5"></p>
              </div>
              <div className="mt-4">
                <form>
                  <label className="text-[rgb(0,0,0,0.6)] font-medium">
                    Email
                  </label>
                  <br></br>
                  <input
                    className=" border border-black  px-4 py-2 w-full rounded-[5px] mt-1"
                    type="text"
                    placeholder="Email"
                  />
                  <div className="mt-4">
                    <label className="text-[rgb(0,0,0,0.6)] font-medium">
                      Username
                    </label>
                    <br></br>
                    <input
                      className=" border border-black t px-4 py-2 w-full rounded-[5px] mt-1"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="text-[rgb(0,0,0,0.6)] font-medium">
                      Password
                    </label>
                    <br></br>
                    <div className="relative">
                      <input
                        className=" border border-black  px-4 py-2 w-full rounded-[5px] mt-1 absolute"
                        type="text"
                        placeholder="Password"
                      />
                      <span className="absolute mt-[1.1rem] ml-[24rem] text-gray-400 text-lg">
                        <FaRegEye />
                      </span>
                    </div>
                  </div>
                  <div className="mt-[4rem]">
                    <label className="text-[rgb(0,0,0,0.6)] font-medium">
                      Confirm Password
                    </label>
                    <br></br>
                    <div className="relative ">
                      <input
                        className=" border border-black  px-4 py-2 w-full rounded-[5px] mt-1 absolute"
                        type="text"
                        placeholder="Password"
                      />
                      <span className="absolute mt-[1.1rem] ml-[24rem] text-gray-400 text-lg">
                        <FaRegEye />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
