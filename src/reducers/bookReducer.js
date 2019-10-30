import { ADD_BOOK, DELETE_BOOK } from "../constans";
import uuid from "uuid";
export default (state, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state,
        { title: action.title, author: action.author, id: uuid.v4() }
      ];
    }
    case DELETE_BOOK: {
      return state.filter(book => book.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
