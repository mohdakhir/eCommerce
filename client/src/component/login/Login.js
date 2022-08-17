import React, { useState } from "react";
import "./login.css";
import Vector from "../Asset/Vector.svg";
import Group from "../Asset/Group.svg";
import Message from "../Asset/Message.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState({
    login: true,
    signup: false,
  });
  const [isLogin, isLoginSet] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  if (isLogin === true) {
    navigate("/addCategory");
    return;
  }
  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const res = await fetch("/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result.status === 'sucess') {
      window.alert("logined successfully!!");
    } else {
      window.alert("logined successfully!!");
      isLoginSet(true);
    }
  };

  return (
    <div>
      <div className="LeftContainer">
        <img src={Group} alt="Md owais"></img>
      </div>
      <div className="login_signup">
        <div className="link_signup_login">
          <a href="/youshd">
            <h2
              onClick={() => {
                setColor({ login: true, signup: false });
              }}
              className={color.login ? "black" : "other"}
            >
              Login
            </h2>
          </a>
          <a href="/youshd/register">
            <h2
              onClick={() => {
                setColor({ login: false, signup: true });
              }}
              className={color.signup ? "black" : "other"}
            >
              Sign up
            </h2>
          </a>
        </div>

        <hr />
        <div>
          <div className="Continue">
            <h1>To Continue</h1>
            <p>We need your Email & password</p>
          </div>
          <div className="form">
            <form method="POST">
              <div>
                <label>
                  <span>*</span>
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                ></input>
              </div>
              <div>
                <label>
                  <span>*</span>
                </label>

                <input
                  type="text"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                ></input>
              </div>
              <img src={Vector} className="vision1"></img>
              <div className="hidden">
                <img src={Message}></img>
                <div>please enter valid email</div>
              </div>
              <button onClick={(e) => postData(e)}>Login</button>
              <div className="items"></div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
