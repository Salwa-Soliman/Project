import React from "react";
import BookTop from "./BookTop";
import classes from "./Books.module.css";

const Book = ({ book }) => {
  let url = "";
  try {
    url = book.imageLinks.thumbnail || book.imageLinks.smallThumbnail;
  } catch (error) {
    console.log("err");
    return;
  }

  return (
    <li>
      <div className={classes["book"]}>
        <BookTop url={url} id={book.id} shelf={book.shelf} />

        <div className={classes["book-title"]}>{book.title}</div>
        <div className={classes["book-authors"]}>
          {book.authors?.join("\n")}
        </div>
      </div>
    </li>
  );
};

export default Book;
