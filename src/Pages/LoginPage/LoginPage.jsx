import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("userData"));
    if (savedUser && savedUser.email === email) {
      navigate("/AccountSettingPage", {
        state: { name: savedUser.name, email: savedUser.email },
      });
    } else {
      alert("User not found or wrong email.");
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="form-container_1">
          <form onSubmit={handlerSubmit}>
            <h1 className="heading">
              Create Your <br></br>PopX account{" "}
            </h1>
            <p className="para">
              Lorem, ipsum dolor sit amet <br></br>consectetur adipisicing elit.{" "}
            </p>
            <fieldset className="custom-fieldset">
              <legend>
                Email Address<span class="required">*</span>
              </legend>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <fieldset className="custom-fieldset">
              <legend>
                Password <span class="required">*</span>
              </legend>
              <input
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <button type="submit" className="Login_btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
