import React, { useState } from "react";
import SimpleForm from "./SimpleForm";
import "./App.css";
import { Link} from 'react-router-dom'



const First = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className="header">{/* <h2>My Application!!!</h2> */}</div>
      <div className="main">
        <div className="nav">{/* <h3>My Navigation</h3> */}</div>

       
        <div className="content">
          {/* <div style = {{padding:"20px"}}>
            <h1>Content of my application will go here.....</h1>
            <p>Sample content to fill the gap as much as possible. Sample content to fill the gap as much as possible.
            Sample content to fill the gap as much as possible.Sample content to fill the gap as much as possible.</p>
            <p>More content to fill the available area of the main contect. More content to fill the available area of the main contect.
            More content to fill the available area of the main contect.More content to fill the available area of the main contect. </p>
          </div> */}
        </div>
      </div>
      {/* <div className = "footer">Footer</div> */}
      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <SimpleForm/>
          <Link to="/first" >
    </Link>
        </div>
        <div> {showChat ? <SimpleForm></SimpleForm> : null} </div>
        <div>
          {!showChat ? (
            <button className="btn" onClick={() => startChat()}>
              click to chat...{" "}
            </button>
          ) : (
            <button className="btn" onClick={() => hideChat()}>
              click to hide...{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default First;
