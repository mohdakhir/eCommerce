import React from "react";
import ContactUs from "../contactUs/ContactUs";
import "./Home.css";

const Home = () => {
  return (
    <div className="mainContent">
      <h2 className="heading">e-Commerce</h2>
      <div className="containerLink">
        <div className="link">
          <a href="/youshd">
            <button>Login</button>
          </a>
          <a href="/youshd/register">
            <button>Signup</button>
          </a>
        </div>
        <div className="contactUs">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
