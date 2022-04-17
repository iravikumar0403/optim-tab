import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoProvider, UserProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </UserProvider>
  </React.StrictMode>
);
