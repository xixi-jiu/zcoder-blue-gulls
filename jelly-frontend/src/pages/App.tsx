import React from "react";
import Routes from "@routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Router basename='/'>
        <Routes />
      </Router>
    </RecoilRoot>
  );
};
export default App;

