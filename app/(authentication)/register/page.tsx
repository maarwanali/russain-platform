import Link from "next/link";
import React from "react";

function Register() {
  return (
    <div className="flex_center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 underline">
          Join to our community
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="full-name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              className="input_auth"
              placeholder="surname name middle-name "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone-number"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="email"
              className="input_auth"
              placeholder="+ [country key]..."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              E-mail
            </label>
            <input
              type="text"
              id="email"
              className="input_auth"
              placeholder="E-mail"
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
          <div className="mb-6">
            <label
              htmlFor="rpassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Repeat Password
            </label>
            <input
              type="password"
              id="password"
              className="input_auth"
              placeholder="repeat your password"
            />
          </div>
          <button className="btn btn_reverse w-full ">Join</button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-[var(--clr-red-400)] hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
