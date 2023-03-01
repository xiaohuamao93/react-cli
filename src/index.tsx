import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// react 18的写法
const root = ReactDom.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

// react 17的写法
// import reactDom from "react-dom";
// reactDom.render(<App />, document.getElementById("app"));
