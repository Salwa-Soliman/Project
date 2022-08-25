import React from "react";
import { useSelector } from "react-redux";
import Shelf from "./Shelf";
import { shelves } from "./../../store/books-slice";
import LoadingIndicator from "../UI/LoadingIndicator";
import classes from "./Shelf.module.css";

const ShelvesList = () => {
  const { allBooks, isLoading } = useSelector((state) => state.books);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="list-books">
      <div className={classes["list-books-content"]}>
        {shelves.map((shelf) => {
          const shelfBooks = allBooks.filter(
            (book) =>
              book.shelf.toLowerCase() === // eg: currentlyReading => currentlyreading
              shelf.split(" ").join("").toLowerCase() // & Currently Reading => currentlyreading
          );
          return <Shelf key={shelf} title={shelf} books={shelfBooks} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(ShelvesList);
