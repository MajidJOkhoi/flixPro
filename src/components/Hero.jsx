import React from "react";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    console.log("Email:", email);
  };

  return (
    <div className="  flex flex-col items-center text-center  px-32 bg-cover bg-center ">
      <div className="flex flex-col items-center text-center py-32 px-4 bg-cover bg-center">
        <h2 className="text-6xl md:text-6xl font-bold text-white">
          Unlimited movies, <br /> TV shows, and more
        </h2>
        <p className="text-lg md:text-xl text-white mt-4">
          Starts at Rs 250. Cancel anytime.
        </p>
        <p className="text-lg md:text-xl text-white mt-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-row  justify-between items-center px-8 py-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-row items-center space-x-4 w-full"
          >
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow w-ful px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:outline-none"
              placeholder="Email address"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
