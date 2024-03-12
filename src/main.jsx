import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/userContext.jsx";
import ExprenseContextProvider from "./contexts/expenseContext.jsx";
import AppContextProvider from "./contexts/appContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserProvider>
        <ExprenseContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ExprenseContextProvider>
      </UserProvider>
    </AppContextProvider>
  </React.StrictMode>
);
