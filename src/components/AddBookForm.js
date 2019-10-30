import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ADD_BOOK } from "../constans";
const AddBookForm = () => {
  const [, dispatch] = useContext(BookContext);
  const [book, setBook] = useState({ author: "", title: "" });

  const { author, title } = book;

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD_BOOK, author, title });
    setBook({ author: "", title: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author:
        <input
          type="text"
          value={author}
          name="author"
          onChange={handleChange}
          style={{ marginLeft: "15px" }}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          name="title"
          onChange={handleChange}
          style={{ marginLeft: "15px" }}
        />
      </label>
      <button type="submit">Add new position</button>
    </form>
  );
};

export default AddBookForm;
