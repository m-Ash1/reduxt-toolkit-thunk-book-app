import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBook } from "./bookSlice";
function BookItem({ book }) {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.auth);
  return (
    <li className="list-group-item d-flex  justify-content-between align-items-center">
      <div>{book.title}</div>
      <div className="btn-group" role="group">
        <button
          onClick={() => dispatch(getBook(book.id))}
          type="button"
          className="btn btn-primary"
        >
          Read
        </button>
        <button
          disabled={!isLoggedIn}
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteBook(book.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default BookItem;
