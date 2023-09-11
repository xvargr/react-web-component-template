import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";

// Select your shadow host
const shadowHost = document.getElementById("react-web-component-target")!;

// Create the shadow root
const shadowRoot = shadowHost.attachShadow({ mode: "open" });

// append stylesheets from the host to the shadow dom, keeps HMR functionality
(function appendCss() {
  const cssSelector = import.meta.env.DEV
    ? 'style[type="text/css"]'
    : 'link[rel="stylesheet"][data-type="component-stylesheet"]';
  const styleElements = document.querySelectorAll(cssSelector);
  shadowRoot.append(...styleElements);
})();

ReactDOM.createRoot(shadowRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
