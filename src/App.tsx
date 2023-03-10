import React from "react";
import { HashRouter, BrowserRouter, Routes, useLocation, useRoutes } from "react-router-dom";
import Router from "@/routers/index";
import { Layout, ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import "simplebar-react/dist/simplebar.min.css";
import "antd/dist/reset.css";

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </ConfigProvider>
  );
};

export default App;
