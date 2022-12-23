import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ProyectoContext } from "../context/ProyectoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProyectoContext>
      <App />
    </ProyectoContext>
  </React.StrictMode>
);
