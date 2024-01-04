import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  function checkAuthJoin() {
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/join");
    }
  }
  function checkAuthHost() {
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/host");
    }
  }
  return <div className="container home_body">Home Page</div>;
};

export default Home;
