import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";
import "./styles/index.css";
import { initialState, appReducers } from "./utils/reducers";
import { AppStateProvider } from "./utils/contexts/appState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);
