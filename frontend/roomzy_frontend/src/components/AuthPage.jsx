import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { TestContext } from "../context/Test.jsx";

export default function AuthPage() {
  const { setTab } = useContext(TestContext);
  const { setUser, setIsLoggedIn } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rent: "",
    place: "",
    email: "",
    password: "",
    confirmPassword: "",
    choosingFactor: "",
    dailyRoutine: "",
    socialActivity: "",
    expenseSharing: "",
    dealBreakerQuality: "",
    hobbiesImportance: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const url = isLogin
      ? `${import.meta.env.VITE_API_URL}/api/roommates/login`
      : `${import.meta.env.VITE_API_URL}/api/roommates/register`;

    const payload = { ...formData };

    if (isLogin) {
      delete payload.name;
      delete payload.location;
      delete payload.rent;
      delete payload.place;
      delete payload.confirmPassword;
      delete payload.choosingFactor;
      delete payload.dailyRoutine;
      delete payload.socialActivity;
      delete payload.expenseSharing;
      delete payload.dealBreakerQuality;
      delete payload.hobbiesImportance;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message || "Success");
      // ⭐ Redirect after successful registration
      if (!isLogin && data.message === "Registered successfully!") {
        setTab("home"); // go to home page
      }
      if (isLogin) {
        if (data.user) {
          setUser(data.user); // store name + email
          setIsLoggedIn(true);
          setTab("home");
        }
        alert("Login successful");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const inputClass =
    "w-full p-3 border border-green-200 bg-white/70 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 transition-all duration-300";

  const selectClass =
    "w-full p-3 border border-green-200 bg-white/70 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 transition-all duration-300";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-green-100 p-4">
      <div className="w-full max-w-2xl p-10 space-y-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-green-200 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-center text-green-700 tracking-wide drop-shadow-sm">
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="text"
                name="rent"
                placeholder="Rent"
                value={formData.rent}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="text"
                name="place"
                placeholder="Place"
                value={formData.place}
                onChange={handleChange}
                className={inputClass}
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={inputClass}
          />

          {!isLogin && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={inputClass}
              />

              <select
                name="choosingFactor"
                value={formData.choosingFactor}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">
                  What is the most important factor for you when choosing a
                  flatmate?
                </option>
                <option>Cleanliness & hygiene</option>
                <option>Friendly & cooperative nature</option>
                <option>Study/Work habits</option>
                <option>Similar lifestyle & interests</option>
              </select>

              <select
                name="dailyRoutine"
                value={formData.dailyRoutine}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">
                  How do you prefer your flatmate’s daily routine to be?
                </option>
                <option>Early riser</option>
                <option>Night owl</option>
                <option>Flexible</option>
                <option>Doesn’t matter to me</option>
              </select>

              <select
                name="socialActivity"
                value={formData.socialActivity}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Expected level of social activity?</option>
                <option>Very social</option>
                <option>Balanced</option>
                <option>Mostly private</option>
                <option>Doesn’t matter</option>
              </select>

              <select
                name="expenseSharing"
                value={formData.expenseSharing}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">How do you prefer sharing expenses?</option>
                <option>Strict 50-50 split</option>
                <option>Flexible</option>
                <option>Fair basis</option>
                <option>Prefer separate finances</option>
              </select>

              <select
                name="dealBreakerQuality"
                value={formData.dealBreakerQuality}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Deal-breaker quality?</option>
                <option>Not paying bills</option>
                <option>Lack of cleanliness</option>
                <option>Loud behavior</option>
                <option>Uncooperative attitude</option>
              </select>

              <select
                name="hobbiesImportance"
                value={formData.hobbiesImportance}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Importance of similar hobbies?</option>
                <option>Very important</option>
                <option>Somewhat important</option>
                <option>Not important</option>
                <option>Prefer different hobbies</option>
              </select>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 text-white bg-green-600 rounded-2xl shadow-lg hover:bg-green-700 active:scale-95 transition-all duration-300 text-lg font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-green-800 font-medium">
          {isLogin ? "Don't have an account?" : "Already registered?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-bold text-green-900 underline hover:text-green-700 transition-all"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
