import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-fin2.png";

export default function SignUp() {
  return (
    <div>
      <div className="pagebg"></div>
      <div className="flex items-center justify-center h-[100vh] signup_layout p-2">
        <div className="max-w-lg w-full p-1 rounded-md shadow-2xl sm:p-5 bg-slate-900 bg-opacity-80">
          <h1 className="text-center text-3xl font-semibold my-7 text-white">
            Sign Up
          </h1>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              // onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              // onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              // onChange={handleChange}
            />

            <Link to="/sign-in" className="">
              <Button size="md" color="failure" pill className="w-full">
                <button
                  type="submit"
                  // disabled={loading}
                  className="">
                  Register
                </button>
              </Button>
            </Link>
          </form>
          <div className="flex gap-2 my-4">
            <p>Have an account?</p>
            <Link to="/sign-in">
              <span className="font-medium text-[#E02424]">Sign In</span>
            </Link>
          </div>
          {/* {error && <p className="text-red-500">{error}</p>} */}
        </div>
      </div>
    </div>
  );
}
