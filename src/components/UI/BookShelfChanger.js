import { useSelector, useDispatch } from "react-redux";
import { updateBookShelf } from "./../../store/books-slice";
import classes from "./BookShelfChanger.module.css";

const BookShelfChanger = ({ shelf, bookId }) => {
  const { allBooks, searchResultBooks } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const changeShelfHandler = (event) => {
    const updatedShelf = event.target.value;

    const book =
      allBooks.find((book) => book.id === bookId) || //if this component is rendered in home page
      searchResultBooks.find((book) => book.id === bookId); //if this component is rendered in searching page

    dispatch(updateBookShelf({ book, shelf: updatedShelf }));
  };

  return (
    <div className={classes["book-shelf-changer"]}>
      <select value={shelf} onChange={changeShelfHandler}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
