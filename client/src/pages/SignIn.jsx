import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-fin3.png";

export default function SignIn() {
  return (
    <header className="flex items-center justify-center h-[100vh]">
      <div className="max-w-lg w-full p-5 rounded-md shadow-2xl sm:p-5 bg-slate-900 bg-opacity-80">
        <h1 className="text-center text-3xl font-semibold my-7 text-white">
          Sign In
        </h1>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="border p-2 pl-4 rounded-3xl focus:outline-none text-black text-md"
            // onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border p-2 pl-4 rounded-3xl focus:outline-none text-black text-md"
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
            <span className="font-medium text-[#E02424]">Register</span>
          </Link>
        </div>
        {/* {error && <p className="text-red-500">{error}</p>} */}
      </div>
    </header>
  );
}
