import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from './pages/about';
import "./App.css";
import "./css/style.css";
import "./fonts/stylesheet.css";
import Auth from "./components/Auth/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backend from "./components/backend/index";
import Authentication from "./components/Authentication/index";
import Contract from "./pages/contract";
import StandardAgreement from "./pages/standardAgreement";
import ContractRollout from "./pages/contractRollout";
import Approvals from "./pages/approvals";
import Department from "./pages/department";
import Designation from "./pages/designation";

function App() {
  return (
    <>
      <div>
      <ToastContainer />
        <Routes   element={<Authentication />} >
          <Route path="/" element={<Auth />} />
        </Routes>

        <Routes>
          <Route  element={<Backend />} >
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/department" element={<Department />} />
          <Route path="/designation" element={<Designation />} />
          <Route path="/contract/upload" element={<Contract />} />
          {/* <Route path="/*" element={<Contract />} /> */}
          <Route path="/contract/rollout" element={<ContractRollout />} />
          <Route path="/standard/agreement" element={<StandardAgreement />} />
          </Route>
        </Routes>

      </div>
    </>
  );
}

export default App;
