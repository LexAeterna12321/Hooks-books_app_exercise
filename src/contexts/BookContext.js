import React, { createContext, useReducer, useEffect } from "react";
import bookReducer from "../reducers/bookReducer";

const initialState = [
  { title: "Siekierezada", author: "Edward Stachura", id: 1 },
  { title: "Bieguni", author: "Olga Tokarczuk", id: 2 }
];

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("books")) || initialState;

  const [books, dispatch] = useReducer(bookReducer, localData);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={[books, dispatch]}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
