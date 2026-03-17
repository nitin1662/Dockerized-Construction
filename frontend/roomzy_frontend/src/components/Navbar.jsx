import React, { useContext } from "react";
import { TestContext } from "../context/Test";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  let { currentTab, setTab } = useContext(TestContext);
  const { isLoggedIn, setIsLoggedIn, setUser } = useContext(AuthContext);

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setTab("home");
  };

  return (
    <nav className="flex items-center justify-between md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-xl font-bold text-green-600 sm:text-6xl">
        Roomzy <span className="text-gray-700 text-lg">Room Buddy</span>
      </div>

      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

        {/* HOME */}
        <li
          className={`hover:text-green-600 cursor-pointer ${
            currentTab === "home" ? "text-green-400 " : "text-gray-700"
          }`}
          onClick={() => setTab("home")}
        >
          Home
        </li>

        {/* WHY ROOMZY */}
        <li
          className={`hover:text-green-600 cursor-pointer ${
            currentTab === "whyRoomzy" ? "text-green-400 " : "text-gray-700"
          }`}
          onClick={() => setTab("whyRoomzy")}
        >
          Why Roomzy
        </li>

        {/* ROOMIES */}
        <li
          className={`hover:text-green-600 cursor-pointer ${
            currentTab === "Roomies" ? "text-green-400 " : "text-gray-700"
          }`}
          onClick={() => setTab("Roomies")}
        >
          Roomies
        </li>

        {/* LOGIN / REGISTER — show only if not logged in */}
        {!isLoggedIn && (
          <li
            className={`hover:text-green-600 cursor-pointer ${
              currentTab === "login" ? "text-green-400 " : "text-gray-700"
            }`}
            onClick={() => setTab("login")}
          >
            Login / Register
          </li>
        )}

        {/* PROFILE — show only if logged in */}
        {isLoggedIn && (
          <li
            className={`hover:text-green-600 cursor-pointer ${
              currentTab === "profile" ? "text-green-400 " : "text-gray-700"
            }`}
            onClick={() => setTab("profile")}
          >
            Profile
          </li>
        )}

        {/* LOGOUT — show only if logged in */}
        {isLoggedIn && (
          <li
            className="cursor-pointer text-red-500 hover:text-red-700 font-semibold"
            onClick={logout}
          >
            Logout
          </li>
        )}
      </ul>

      <button className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
        Contact →
      </button>
    </nav>
  );
}