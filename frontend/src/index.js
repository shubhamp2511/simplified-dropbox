import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import global styles
import App from "./App"; // Main App component

// Render the App component to the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);