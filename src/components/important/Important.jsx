import React, { useState } from "react";
import "./Important.css";
import logo from "../../assets/bitcoin.png";
import Chat from "./Chat";

const Important = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(true); // First, make sure Chat component is loaded

    setTimeout(() => {
      if (window.Tawk_API) {
        window.Tawk_API.maximize(); // 🚀 Forcefully open chat
      }
    }, 500); 
  };

  return (
    <>
      {showChat && <Chat />}
      <div className="body1">
        <img src={logo} alt="Logo" />
        <div className="container21">
          <h1>ALERT !</h1>
          <p>
            Multiple suspicious files and viruses found in your device. Contact
            Support for further help.
          </p>
          <h3>Error CODE: EBRX16X76D</h3>
          <button onClick={handleChatToggle}>Contact Chat Support</button>
          {/* onClick={handleChatToggle} */}
        </div>
      </div>
    </>
  );
};

export default Important;
