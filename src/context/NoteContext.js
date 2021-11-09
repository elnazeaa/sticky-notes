import React, { createContext } from "react";

const NoteContext = createContext();

const NoteContextProvider = (props) => {
  return (
    <NoteContext.Provider value="hello">{props.children}</NoteContext.Provider>
  );
};

export default NoteContextProvider;
