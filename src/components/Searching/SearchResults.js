import React from "react";
import BooksList from "./../Books/BooksList";
import { useSelector } from "react-redux";
import classes from "./SearchResults.module.css";
import LoadingIndicator from "./../UI/LoadingIndicator";

const SearchResults = () => {
  const { searchResultBooks, isLoading, noMatch } = useSelector(
    (state) => state.books
  );

  let content = (
    <h3 className="centered-content">Start typing to find books</h3>
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (noMatch) {
    return <h3 className="centered-content">No match found ...</h3>;
  }

  if (searchResultBooks.length > 0) {
    content = <BooksList books={searchResultBooks} search />;
  }

  return <div className={classes["search-books-results"]}>{content}</div>;
};

export default SearchResults;
