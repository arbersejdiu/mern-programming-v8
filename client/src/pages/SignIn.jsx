import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row">
      <div className="flex-1  flex items-center">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-6xl">AE</h1>
          <span className="text-[#E02424] font-semibold text-5xl">
            BLOGSITE
          </span>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="max-w-2xl mx-auto pt-24 p-3 ">
          <h1 className="text-left text-3xl font-semibold my-7 text-white ">
            Sign In
          </h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              id="email"
              placeholder="email"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              // onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="password"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              // onChange={handleChange}
            />

            <Link to="/sign-in" className="">
              <Button size="md" color="failure" pill className="w-full">
                <button
                  type="submit"
                  // disabled={loading}
                  className="">
                  Sign In
                </button>
              </Button>
            </Link>
          </form>
          <div className="flex gap-2 my-4">
            <p>Don't have an account?</p>
            <Link to="/sign-up">
              <span className="font-semibold text-[#E02424]">Sign Up</span>
            </Link>
          </div>
          {/* {error && <p className="text-red-500">{error}</p>} */}
        </div>
      </div>
    </div>
  );
}
