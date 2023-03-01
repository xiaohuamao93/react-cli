import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Router from "@/routers/index";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
