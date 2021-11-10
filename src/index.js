import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NoteContextProvider from "./context/NoteContext";

ReactDOM.render(
  <React.StrictMode>
    <NoteContextProvider>
      <App />
    </NoteContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
