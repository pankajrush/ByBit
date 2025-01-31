import React from "react";
import "./Home.css";
import logo from "../../assets/Untitled.ico";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import telegram from "../../assets/telegram.png";
import bitcoin from "../../assets/bitcoin.png";
import { useNavigate } from "react-router-dom";
import Chat from "../important/Chat";

const Home = () => {
  const navigate = useNavigate();

  const handlesumbit = (e) => {
    e.preventDefault();
    navigate("/twostepverify");
  };

  return (
    <>
      <Chat />
      <div className="home">
        <div className="navbar">
          <div className="left-nav">
            <img src={logo} alt="" />
          </div>
          <div className="right-nav">
            <ul>
              <li className="login">Log In</li>
              <li className="sign">Sign Up</li>
            </ul>
          </div>
        </div>
        <div className="home-middle">
          <form className="left-home item" onSubmit={handlesumbit}>
            <div className="heading-form">
              <h1>Welcome to Bybit</h1>
              <p>Sign up</p>
            </div>
            <p className="email">Email </p>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <p className="forgot">Forgot password</p>
            <button>Log in</button>
            <p className="loginwith">or log in with</p>
            <ul className="socials">
              <li>
                {" "}
                <img src={google} className="google" alt="" />{" "}
              </li>
              <li>
                {" "}
                <img src={apple} className="apple" alt="" />{" "}
              </li>
              <li>
                {" "}
                <img src={telegram} className="telegram" alt="" />{" "}
              </li>
            </ul>
            <p className="footer">Log in with Subaccount</p>
          </form>
          <div className="right-home item">
            <h1>
              Crypto Dawn: Inaugurate <br />
              Your Crypto Journey
            </h1>
            <p>
              Deposit, Trade, Collect. Will Your <br />
              Cards Unlock 1 BTC?
            </p>
            <img src={bitcoin} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
