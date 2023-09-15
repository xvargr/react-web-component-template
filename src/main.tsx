import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

import verifyGlobals from "./utils/verifyGlobals.ts";

import App from "./App.tsx";
import "../globals.d.ts";
import "./styles/index.scss";
import "./styles/scrollbar.scss";

// verify required global variables
verifyGlobals();

// Get the socket url from the meta tag
const target = (
  document.getElementsByName("unity-target-id")[0] as HTMLMetaElement
)?.content;
if (!target) throw new Error("No  component target specified");

// Select your shadow host
const shadowHost = document.getElementById(target)!;

// Create the shadow root
const shadowRoot = shadowHost.attachShadow({ mode: "open" });

// on initial load, append stylesheets from the host to the shadow dom, keeps HMR functionality
// hack: this is an unreliable bodge to encapsulate css in shadow dom reactively
// ideally vite would have a way to support this
// this is has an active issue on github as of the time of writing
(function appendCss() {
  const cssSelector = import.meta.env.DEV
    ? 'style[type="text/css"],style[data-emotion]'
    : 'link[rel="stylesheet"][data-type="component-stylesheet"],style[data-emotion]';
  // setTimeout(() => {
  const styleElements = document.querySelectorAll(cssSelector);
  shadowRoot.append(...styleElements);
  // }, 5);
})();

// dynamically append stylesheets from the host head to the shadow dom on head mutation
const headObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      shadowRoot.prepend(...mutation.addedNodes);
    }
  });
});
headObserver.observe(document.querySelector("head")!, { childList: true });

ReactDOM.createRoot(shadowRoot).render(
  <React.StrictMode>
    <div id="unity-root" className="@container">
      <App />
    </div>
  </React.StrictMode>
);
