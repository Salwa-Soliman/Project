import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  resetSearchQuery,
  searchBooks,
  setSearchQuery,
} from "../../store/books-slice";
import { closeSearch } from "../../store/search-slice";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const searchQuery = useSelector((state) => state.books.searchQuery);
  const dispatch = useDispatch();
  const searchInputRef = useRef();

  const closeSearchHandler = () => {
    dispatch(closeSearch);
  };

  const changeSearchQueryHandler = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  useEffect(() => {
    if (searchQuery) {
      // to prevent unnecessary API Calls if user is still typing
      const timer = setTimeout(() => {
        if (searchQuery === searchInputRef.current.value) {
          dispatch(searchBooks({ query: searchQuery }));
        }
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetSearchQuery());
    };
  }, [dispatch]);

  return (
    <div className={classes["search-books-bar"]}>
      <Link to="/" className="close-search" onClick={closeSearchHandler}>
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          ref={searchInputRef}
          value={searchQuery}
          onChange={changeSearchQueryHandler}
        />
      </div>
    </div>
  );
};

export default SearchBar;
