import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const toggleButton = () => {
    alert("data Submitted");
    console.log(toggleButton);
  };
  return (
    <div className="h-screen  flex bg-violet-400 justify-center items-center">
      <div className=" bg-gray-300 rounded-2xl">
        <h2 className="text-2xl text-black font-bold  flex items-center justify-center mt-4">
          Sign Up
        </h2>
        <form className="p-5">
          <div>
            <label className="text-sm font-medium text-gray-900">
              Enter Your First Name
            </label>
            <input
              type="text"
              placeholder="Enter Your First Name..."
              required
              className="w-full p-3 rounded-xl  "
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">
              Enter Your Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Last Name..."
              required
              className="w-full p-3 rounded-xl"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email..."
              required
              className="w-full p-3 rounded-xl"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">
              Enter Your Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password..."
              required
              className="w-full p-3 rounded-xl"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">
              Confirm Your Password
            </label>
            <input
              type="password"
              placeholder="Confirm Your Password..."
              required
              className="w-full p-3 rounded-xl "
            />
          </div>

          <div className="flex justify-between p-3 mt-3">
            <p className="text-sm text-gray-800">
              Have an account{" "}
              <Link to="/Login" className="text-blue-400 font-bold">
                Log In
              </Link>
            </p>
            <button
              type="submit"
              onClick={toggleButton}
              className=" bg-sky-400 w-24 h-10 rounded-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
