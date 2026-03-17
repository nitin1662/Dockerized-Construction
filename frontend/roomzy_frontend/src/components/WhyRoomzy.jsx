import React, { useContext } from "react";
import { TestContext } from "../context/Test";

export default function WhyRoomzy() {
  let { setTab } = useContext(TestContext);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-600">
          Welcome to Roomzy
        </h1>
        <p className="mt-4 text-gray-700 text-lg md:text-xl">
          Find the perfect roommate that matches your lifestyle and preferences.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Why Choose Roomzy?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Customized Matches</h3>
            <p>
              Roomzy helps you find roommates according to your lifestyle,
              habits, and preferences — ensuring a harmonious living experience.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Verified Profiles</h3>
            <p>
              All profiles are verified to ensure safety and reliability, so you
              can connect with confidence.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Easy Communication</h3>
            <p>
              Connect directly with potential roommates via chat or call to make
              quick and informed decisions.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Smart Recommendations</h3>
            <p>
              Our algorithm suggests the best matches based on your preferences,
              ensuring you find a compatible roommate quickly.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          How Roomzy Works
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-3 text-lg">
          <li>Sign up and create your profile.</li>
          <li>Specify your preferences and lifestyle choices.</li>
          <li>Browse through verified roommate profiles.</li>
          <li>Connect and communicate with potential roommates.</li>
          <li>Find your perfect match and start your roommate journey!</li>
        </ol>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600">
          Ready to find your perfect roommate?
        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          Join Roomzy today and start your journey towards a better living
          experience.
        </p>
        <button
          className="mt-6 bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition text-lg"
          onClick={() => setTab("Roomies")}
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
