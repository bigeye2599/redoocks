import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TodosProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
