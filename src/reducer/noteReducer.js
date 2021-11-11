import { nanoid } from "nanoid";
import moment from "moment";

const noteReducre = (state, action) => {
  if (action.type === "GET_TEXT_VALUE") {
    return {
      ...state,
      all_notes: [
        ...state.all_notes,
        {
          id: nanoid(),
          date: moment().add(10, "days").calendar(),
          message: state.newText.slice(0, 200),
        },
      ],
      copyNotes: [
        ...state.all_notes,
        {
          id: nanoid(),
          date: moment().add(10, "days").calendar(),
          message: state.newText.slice(0, 200),
        },
      ],
      newText: "",
    };
  }

  //Get text Area Value
  if (action.type === "TEXT_AREA") {
    return { ...state, newText: action.payload };
  }

  //Remove Notes
  if (action.type === "REMOVE_NOTE") {
    let newNotes = state.all_notes.filter((item) => item.id !== action.payload);
    return { ...state, all_notes: newNotes, copyNotes: newNotes };
  }

  //Get Search Value
  if (action.type === "GET_SEARCH_VAL") {
    return {
      ...state,
      searchValue: action.payload,
    };
  }

  //Search
  if (action.type === "SEARCH") {
    let tempNotes = [...state.copyNotes];
    console.log(tempNotes);
    console.log(state.searchValue);
    tempNotes = tempNotes.filter((item) => {
      return item.message.toLowerCase().includes(state.searchValue);
    });
    return { ...state, all_notes: tempNotes };
  }
  return state;
};

export default noteReducre;
