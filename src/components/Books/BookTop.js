import React from "react";
import BookShelfChanger from "./../UI/BookShelfChanger";
import { Link } from "react-router-dom";
import BookCover from "./BookCover";
import classes from "./Books.module.css";

const BookTop = ({ url, id, shelf }) => {
  return (
    <div className={classes["book-top"]}>
      <Link to={`/${id}`}>
        <BookCover url={url} />
      </Link>
      <BookShelfChanger bookId={id} shelf={shelf} />
    </div>
  );
};

export default BookTop;
