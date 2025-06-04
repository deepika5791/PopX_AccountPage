import React from "react";
import Frontpage from "./Components/frontpage";
import CreateNewAccount from "./Pages/CreateNewAcc/CreateNewAccount";
import AccountSetting from "./Pages/AccountSettingPage/AccountSetting";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/CreateNewAccount" element={<CreateNewAccount />} />
          <Route path="/AccountSettingPage" element={<AccountSetting />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
