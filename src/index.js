import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use basename only in production (GitHub Pages)
// const basename =
//   process.env.NODE_ENV === "production" ? "/DatingApp" : "/";

  // Detect if running on GitHub Pages
// const isGitHubPages = window.location.hostname.includes("github.io");

// // Use "/DatingApp" only on GitHub Pages, otherwise "/"
// const basename = isGitHubPages ? "/DatingApp" : "/";

function getBasename() {
  const isGitHubPages = window.location.hostname.includes("github.io");
  return isGitHubPages ? "/DatingApp" : "/";
}

// Handle redirect query param (from 404.html)
function getInitialPath() {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  if (redirect) {
    const newUrl = window.location.origin + getBasename() + redirect;
    window.history.replaceState(null, "", newUrl);
  }
}

getInitialPath();
root.render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
