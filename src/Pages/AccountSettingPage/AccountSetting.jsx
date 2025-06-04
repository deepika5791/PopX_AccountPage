import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AccountSetting.css";

const AccountSetting = () => {
  const { state } = useLocation();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handelerlogin = () => {
    navigate("/");
  };

  return (
    <div className="Account_wrapper">
      <div className="Main_InfoContainer">
        <h3 className="Main_heading">Account Setting</h3>
        <div className="Content">
          <div className="Person_Information">
            <div className="PhotoWrapper">
              <img
                src={image || "https://i.imgur.com/6VBx3io.png"}
                alt="Profile"
                className="Photo"
                onClick={handleImageClick}
                style={{ cursor: "pointer" }}
              />

              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>

            <div className="contents">
              <h3>{state?.name || "Marry Doe"}</h3>
              <h4>{state?.email || "MarryDoe@gmail.com"}</h4>
            </div>
          </div>

          <div className="Information">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni
            aliquam ad reiciendis esse, id repudiandae quas ullam ratione! Eum
          </div>
        </div>
        <div className="Log_Out">
          <button onClick={handelerlogin} className="logoutTomainpage">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
