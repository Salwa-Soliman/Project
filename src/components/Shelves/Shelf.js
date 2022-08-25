import React from "react";
import BooksList from "./../Books/BooksList";
import classes from "./Shelf.module.css";

const Shelf = ({ books, title }) => {
  return (
    <div className={classes.bookshelf}>
      <h2 className={classes["bookshelf-title"]}>{title}</h2>
      <BooksList books={books} />
    </div>
  );
};

export default React.memo(Shelf);
