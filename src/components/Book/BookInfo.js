import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const BookInfo = () => {
  const { currentBook } = useSelector((store) => store.books);

  if (!currentBook)
    return (
      <div className="alert alert-secondary" role="alert">
        There is no post selected yet. Please select!
      </div>
    );

  return (
    <Fragment>
      <h2>Book Details</h2>
      <div>
        <p className="fw-bold">Title: {currentBook.title}</p>
        <p className="fw-light">Description: {currentBook.description}</p>
        <p className="fst-italic">Price: {currentBook.price}</p>
      </div>
    </Fragment>
  );
};

export default BookInfo;
