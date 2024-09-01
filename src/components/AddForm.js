import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "./Book/bookSlice";

const Addform = () => {
  const { isLoggedIn } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      title: ref.current[0].value,
      price: ref.current[1].value,
      description: ref.current[2].value,
      id: Math.floor(Math.random() * 1000).toString(),
    };

    dispatch(insertBook(book));
  };
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form ref={ref} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" required />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" id="price" required />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            disabled={!isLoggedIn}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
