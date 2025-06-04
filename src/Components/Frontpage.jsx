import React from "react";
import "./Frontpage.css";
import { useNavigate } from "react-router-dom";
const Frontpage = () => {
  const navigate = useNavigate();
  const handleCreateClick = () => {
    navigate("/CreateNewAccount");
  };

  const handleAlreadyLogin = () => {
    navigate("/LoginPage");
  };
  return (
    <div className="Main_Container">
      <div className="Container">
        <div className="Welcome_Page">
          <h1 className="heading">Welcome to PopX</h1>
          <p className="para">
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </p>
        </div>
        <br></br>
        <div className="Create_Account">
          <button onClick={handleCreateClick} className="Account_btn">
            Create Account
          </button>
        </div>
        <br></br>
        <div className="Already_Registered">
          <button onClick={handleAlreadyLogin} className="Registration_btn">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
