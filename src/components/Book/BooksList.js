import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
const BooksList = () => {
  const { books, isLoading, error } = useSelector((store) => store.books);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <ul className="list-group">
        {books?.length > 0
          ? books?.map((book) => <BookItem key={book.id} book={book} />)
          : "No books found"}
      </ul>
    </div>
  );
};

export default BooksList;
