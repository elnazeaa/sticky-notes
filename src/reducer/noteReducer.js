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
          message: action.payload,
        },
      ],
    };
  }
  return state;
};

export default noteReducre;
