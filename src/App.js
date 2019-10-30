import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
