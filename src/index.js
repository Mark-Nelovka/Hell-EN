import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import { GlobalStyle } from "./stylesheet/index.styled";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
