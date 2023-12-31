import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import "./AuthPage.css";
const AuthPage = () => {
  const [passVal, setPassVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const defaultState = {
    Email: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
  };
  const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [authData, setAuthData] = useState(defaultState);
  const handleSubmit = (event) => {
    setAuthData({ ...authData, [event.target.name]: event.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    console.log("ssssssssssss", passRegex.test(authData.Password));
    if (authData.Password !== authData.ConfirmPassword) {
      setPassVal("Password and confirm password should be the same");
    } else {
      setPassVal("");
    }
    if (!EmailRegex.test(authData.Password) && authData.Email.length > 0) {
      setEmailVal("Invalid Email");
    } else {
      setEmailVal("");
    }
    if (
      authData.Email === "" ||
      authData.UserName === "" ||
      authData.Password === "" ||
      authData.ConfirmPassword === "" ||
      !passRegex.test(authData.Password) ||
      !EmailRegex.test(authData.Email) ||
      authData.Password !== authData.ConfirmPassword
    ) {
      alert("Invalid Submission");
    } else {
      alert("Successfully Submitted");
    }
  };

  return (
    <>
      <div className="w-[1240px] p-4 m-auto">
        <div className="mt-[49px] ml-[97px] ">
          <button className="border border-[#6495ED] w-[199px] h-[53px]  text-2xl font-medium bg-[#6495ED] text-white rounded transition-all ease-in-out delay-150 shadow hover:shadow-[0_0px_40px_#6495ED]">
            BOOK NOW
          </button>
          <button className="w-[199px] h-[53px]  text-2xl font-medium transition-all ease-in-out delay-150 shadow bg-gradient-to-r from-cyan-300 via-indigo-500 to-pink-500 text-white rounded ml-[7rem] hover:shadow-[0_0px_40px_#6495ED]">
            BOOK NOW
          </button>
          <div className="h-[750px] w-[486px] border mt-[4rem] rounded-3xl bg-white">
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
                    onChange={handleSubmit}
                    className=" border border-black  px-4 py-2 w-full rounded-[5px] mt-1"
                    type="text"
                    placeholder="Email"
                    name="Email"
                    value={authData.Email}
                  />
                  <div className=" text-red-600">{emailVal}</div>
                  <div className="mt-4">
                    <label className="text-[rgb(0,0,0,0.6)] font-medium">
                      Username
                    </label>
                    <br></br>
                    <input
                      onChange={handleSubmit}
                      name="UserName"
                      value={authData.UserName}
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
                        onChange={handleSubmit}
                        name="Password"
                        value={authData.Password}
                        className=" border border-black  px-4 py-2 w-full rounded-[5px] mt-1 absolute"
                        type="password"
                        placeholder="Password"
                      />
                      <span className="absolute mt-[1.1rem] ml-[24rem] text-gray-400 text-lg">
                        <FaRegEye />
                      </span>
                    </div>
                  </div>
                  <div className="mt-[2rem]">
                    <div className=" py-3 text-red-600">
                      {!passRegex.test(authData.Password) &&
                      authData.Password.length > 0 ? (
                        <p>
                          Password must contain atleast 1 capital letter 1 small
                          letter 1 number and 1 special character and must have
                          8 characters
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <label className="text-[rgb(0,0,0,0.6)] font-medium">
                      Confirm Password
                    </label>
                    <br></br>
                    <div className="relative ">
                      <input
                        onChange={handleSubmit}
                        name="ConfirmPassword"
                        value={authData.ConfirmPassword}
                        className=" border border-black  px-4 py-2 w-full rounded-[5px] mt-1 absolute"
                        type="password"
                        placeholder="Confirm Password"
                      />
                      <span className="absolute mt-[1.1rem] ml-[24rem] text-gray-400 text-lg">
                        <FaRegEye />
                      </span>
                      <div className="absolute mt-[2rem] py-3 text-red-600">
                        {passVal}
                      </div>
                    </div>
                    <button
                      onClick={handleClick}
                      className=" mt-[4.5rem] w-full p-2 rounded-md bg-[rgb(216,0,39)] text-white text-lg transition-all ease-in-out delay-150 hover:bg-[rgb(216,0,39,0.6)] "
                    >
                      Iniciar sesión
                    </button>
                    <div className="mt-4 text-[#D80027] ">
                      <p className="text-lg text-center font-semibold leading-5 underline underline-offset-2">
                        olvide mi contraseña
                      </p>
                    </div>
                    <div className="flex w-full mt-3">
                      <p className="w-[14rem] border border-[rgb(0,0,0,0.1)] h-0 mt-[14px]"></p>
                      <p className="text-base px-1">o</p>
                      <p className="w-[14rem] border border-[rgb(0,0,0,0.1)] h-0 mt-[14px]"></p>
                    </div>
                    <div className="flex justify-center items-center text-md text-gray-600 font-medium">
                      <p>¿Aún no tienes cuenta? </p>
                    </div>
                    <div className="mt-1 text-[#D80027] ">
                      <p className="text-md text-center font-semibold leading-5 underline underline-offset-2">
                        Crea una aquí
                      </p>
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
