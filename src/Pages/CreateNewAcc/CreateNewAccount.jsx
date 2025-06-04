import React, { useState } from "react";
import "./CreateNewAccount.css";
import { useNavigate } from "react-router-dom";
const CreateNewAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ name, email }));
    navigate("/AccountSettingPage", { state: { name, email } });
  };
  return (
    <div className="createAccount_wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="heading">
            Create Your <br></br>PopX account
          </h1>
          <fieldset className="custom-fieldset">
            <legend>
              Full Name<span class="required">*</span>
            </legend>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <fieldset className="custom-fieldset">
            <legend>
              Phone number<span class="required">*</span>
            </legend>
            <input type="text" />
          </fieldset>
          <fieldset className="custom-fieldset">
            <legend>
              Email address<span class="required">*</span>
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
              Password<span class="required">*</span>
            </legend>
            <input type="text" />
          </fieldset>
          <fieldset className="custom-fieldset">
            <legend>
              Company Name<span class="required">*</span>
            </legend>
            <input type="text" />
          </fieldset>
          <div className="custom-radio-group">
            <p>
              Are you an agency? <span className="required">*</span>
            </p>
            <label>
              <input type="radio" name="agency" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" /> No
            </label>
          </div>

          <button type="submit" className="Create_btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewAccount;
