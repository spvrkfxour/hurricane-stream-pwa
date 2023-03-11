import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => console.log("Service worker registered"))
      .catch((error) => console.error("Error registering service worker"));
  }
  
ReactDOM.render(<App />, document.getElementById('root'));
