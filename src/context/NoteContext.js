import React, { createContext, useReducer } from "react";
import noteReducre from "../reducer/noteReducer";
import { nanoid } from "nanoid";
import moment from "moment";

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
  const initalState = {
    all_notes: [
      {
        id: nanoid(),
        date: moment().add(10, "days").calendar(),
        message: "first message",
      },
    ],
    newText: "",
  };

  const [state, dispatch] = useReducer(noteReducre, initalState);

  const handleSave = (text) => {
    if (text) {
      dispatch({ type: "GET_TEXT_VALUE", payload: text });
    }
  };

  return (
    <NoteContext.Provider value={{ ...state, handleSave }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
