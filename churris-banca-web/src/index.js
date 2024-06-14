import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));

//App encerrada por el autenticador
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
