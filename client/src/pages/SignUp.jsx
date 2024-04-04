import { Alert, Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo-fin2.png";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(formData);
  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setSuccessMessage("User Created Successfully !!");
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className="pagebg"></div>
      <div className="flex items-center justify-center h-[100vh] signup_layout p-2">
        <div className="max-w-lg w-full p-1 rounded-md shadow-2xl sm:p-5 bg-slate-900 bg-opacity-80">
          <h1 className="text-center text-3xl font-semibold my-7 text-white">
            Sign Up
          </h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border p-2 pl-4 rounded-3xl focus:outline-none text-black"
              onChange={handleChange}
            />
            <Button
              size="md"
              color="failure"
              pill
              className="w-full"
              type="submit"
              disabled={loading}>
              {loading ? (
                <span>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </span>
              ) : (
                "Register"
              )}
            </Button>
          </form>
          <div className="flex gap-2 my-4">
            <p>Have an account?</p>
            <Link to="/sign-in">
              <span className="font-medium text-[#E02424]">Sign In</span>
            </Link>
          </div>
          {errorMessage && (
            <Alert className="text-red-500" color="failure">
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert className="text-green-500" color="success">
              {successMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
