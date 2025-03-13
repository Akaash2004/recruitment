import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"; // Ensure correct case and extension
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css"; // Ensure the file exists in src/styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
