import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { OpenMenuProvider } from "./contexts/open-menu.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OpenMenuProvider>
      <App />
    </OpenMenuProvider>
  </React.StrictMode>
);
