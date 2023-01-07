import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/reset.css";
import "./index.css";
import { ConfigProvider } from "antd";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
