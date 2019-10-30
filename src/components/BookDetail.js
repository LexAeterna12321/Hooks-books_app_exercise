import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { DELETE_BOOK } from "../constans";
const BookDetail = ({ title, author, id }) => {
  const [, dispatch] = useContext(BookContext);

  const handleDelete = id => {
    dispatch({ type: DELETE_BOOK, id });
  };

  return (
    <div onClick={() => handleDelete(id)}>
      <span style={spanStyle}>
        {author} -> {title}
      </span>
    </div>
  );
};

const spanStyle = {
  padding: "20px",
  textAlign: "center",
  display: "block"
};

export default BookDetail;
