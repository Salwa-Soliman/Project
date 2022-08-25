import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import classes from "./Books.module.css";

const BooksList = ({ books, search }) => {
  //search indicates whether this component is rendered in search page or not
  if (!books.length && !search) {
    return (
      <p
        className="centered"
        style={{ fontSize: "18px", color: "#999", marginTop: "20px" }}
      >
        No books added yet ...
        <br />
        Start{" "}
        <Link to={"/search"} className="link">
          adding
        </Link>{" "}
        some!
      </p>
    );
  }

  return (
    <div className="bookshelf-books centered">
      <ol className={classes["books-grid"]}>
        {books.map((book, index) => (
          <Book key={book.id} book={book} />
        ))}
      </ol>
    </div>
  );
};

export default React.memo(BooksList);
