import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* Provider provides the ability to access the store for my nested components.
    Passes a prop called, usually store, that is equal to the store variable 
    created in the store.js file. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
