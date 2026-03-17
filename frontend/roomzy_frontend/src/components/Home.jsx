import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import { useContext } from "react";
import { TestContext } from "../context/Test";
import WhyRoomzy from "./WhyRoomzy";
import RoommatesCard from "./RoommatesCard";
import { useState, useEffect } from "react";
import AuthPage from "./AuthPage";
import ProfilePage from "./ProfilePage";
let Home = () => {
  const [roommates, setRoommates] = useState([]);
  useEffect(() => {
    const fetchRoommates = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/roommates`); // your backend URL
        const data = await res.json();
        setRoommates(data);
      } catch (err) {
        console.error("Error fetching roommates:", err);
      }
    };
    fetchRoommates();
  }, []);

  let { currentTab } = useContext(TestContext);
  let content;
  switch (currentTab) {
    case "home":
      content = (
        <>
          <Hero />
          <About />
        </>
      );
      break;
    case "login":
      content = <AuthPage></AuthPage>;
      break;

    case "whyRoomzy":
      content = <WhyRoomzy></WhyRoomzy>;
      break;

    case "Roomies":
      content = <RoommatesCard roommates={roommates}></RoommatesCard>;
      break;

    case "profile":
      content = <ProfilePage></ProfilePage>;
      break;
  }

  return <div className="font-sans">{content}</div>;
};
export default Home;
