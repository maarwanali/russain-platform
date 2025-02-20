import Link from "next/link";
import React from "react";

function Signin() {
  return (
    <div className="flex_center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Gmail, Username or Phone Number
            </label>
            <input
              type="text"
              id="email"
              className="input_auth"
              placeholder="Enter your Gmail, username or phone number"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input_auth"
              placeholder="Enter your password"
            />
          </div>
          <button className="btn btn_reverse w-full ">Sign In</button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[var(--clr-red-400)] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
