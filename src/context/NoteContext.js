import React, { createContext, useEffect, useReducer } from "react";
import noteReducre from "../reducer/noteReducer";

export const NoteContext = createContext();

function showItems() {
  let items = localStorage.getItem("saveItems");
  if (items) {
    return JSON.parse(localStorage.getItem("saveItems"));
  } else {
    return [];
  }
}

const NoteContextProvider = (props) => {
  //intiall Values
  const initalState = {
    all_notes: showItems(),
    newText: "",
    searchValue: "",
    copyNotes: showItems(),
  };

  const [state, dispatch] = useReducer(noteReducre, initalState);

  //save vAlue
  const handleSave = () => {
    if (state.newText) {
      dispatch({ type: "GET_TEXT_VALUE" });
    }
  };

  //handle textArea and remaining section
  const getTxtAreaValue = (e) => {
    const val = e.target.value;
    let number = 200;
    if (number - state.newText.length > 0) {
      dispatch({ type: "TEXT_AREA", payload: val });
    }
  };

  //Remove note
  const removeNote = (id) => {
    dispatch({ type: "REMOVE_NOTE", payload: id });
  };

  //Search Value
  const getSearchValue = (e) => {
    let val = e.target.value;
    dispatch({ type: "GET_SEARCH_VAL", payload: val });
    dispatch({ type: "SEARCH" });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  useEffect(() => {
    localStorage.setItem("saveItems", JSON.stringify(state.all_notes));
  }, [state.all_notes, state.copyNotes]);

  return (
    <NoteContext.Provider
      value={{
        ...state,
        handleSave,
        getTxtAreaValue,
        removeNote,
        getSearchValue,
        handleSearchSubmit,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
