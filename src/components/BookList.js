import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetail";
const BookList = () => {
  const [books] = useContext(BookContext);

  const booksAmountMsg =
    books.length > 0
      ? `You have ${books.length} book${
          books.length > 1 ? "s" : ""
        } added. Great job. Trully.`
      : `You have no books added. You Silly goose.`;

  return (
    <ul>
      <h6>{booksAmountMsg}</h6>
      {books.map(book => (
        <BookDetail key={book.id} {...book} />
      ))}
    </ul>
  );
};

export default BookList;
