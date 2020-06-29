import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./assets/css/reset.css";
import RoutesApp from "./routes";
import * as serviceWorker from "./serviceWorker";

const ROOT = document.querySelector('[data-js="root"]');

render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>,
  ROOT
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
