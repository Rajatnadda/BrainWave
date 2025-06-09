import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex items-center bg-violet-400 justify-center">
      <div className=" rounded-2xl bg-gray-300 p-4 ">
        <h2 className="text-3xl font-bold text-center text-black">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-800 text-center">
          Login to your account
        </p>

        <form className="p-5">
          <div>
            <label className="text-sm font-medium text-gray-900">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-xl "
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className=" text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-xl "
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-400 items-center mt-5 p-2 rounded-xl"
          >
            Login
          </button>
          <div className="flex justify-between mt-3">
            <a className="text-black hover:underline cursor-pointer">
              Forgot Password
            </a>
            <a href="/Register" className=" text-blue-600 hover:underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
