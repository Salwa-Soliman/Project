import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openSearch } from "../../store/search-slice";
import classes from "./SearchBook.module.css";
const SearchBook = () => {
  const dispatch = useDispatch();

  const openSearchHandler = useCallback(() => {
    dispatch(openSearch);
  }, [dispatch]);

  return (
    <div className={classes["open-search"]}>
      <Link to={"/search"} onClick={openSearchHandler}>
        Add a book
      </Link>
    </div>
  );
};

export default React.memo(SearchBook);
