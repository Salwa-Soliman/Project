import { useEffect, useState } from "react";
import BookCover from "./BookCover";
import { clearBookDetails, getBookById } from "../../store/books-slice";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "./../UI/LoadingIndicator";
import Title from "./../common/Title";
import classes from "./BookDetailsContent.module.css";

const BookDetailsContent = ({ id }) => {
  const [showMore, setShowMore] = useState(true);
  const dispatch = useDispatch();
  const { viewedBook: book, isLoading } = useSelector((state) => state.books);

  const showAllDescriptionHandler = () => {
    setShowMore((currentState) => !currentState);
  };

  useEffect(() => {
    dispatch(getBookById({ id }));
    return () => {
      dispatch(clearBookDetails);
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Title>{book.title}</Title>
      <div className={classes.content}>
        <BookCover url={book.imageLinks?.thumbnail} details />
        <div className={classes.textContainer}>
          {book.description && (
            <div className="description">
              <b>Description: </b>
              {showMore
                ? book.description?.slice(0, 100) + "..."
                : book.description}
              <button onClick={showAllDescriptionHandler} className={"link"}>
                {" "}
                Show {showMore ? "more" : "less"}
              </button>
            </div>
          )}
          {book.categories && (
            <div className="categories">
              <b>Categories: </b>
              {book.categories?.join(" | ")}
            </div>
          )}
          {book.authors && (
            <div className="authors">
              <b>Author{book.authors?.length > 1 && "s"}: </b>{" "}
              {book.authors?.join(" & ")}
            </div>
          )}
          {book.pageCount && (
            <div className="page-count">
              <b>Number of Pages: </b>
              {book.pageCount}
            </div>
          )}
          {book.contentVersion && (
            <div className="version">
              <b>Version: </b>
              {book.contentVersion}
            </div>
          )}
          {book.publisher && (
            <div className="publisher">
              <b>Publisher: </b>
              {book.publisher}
            </div>
          )}

          {book.publishedDate && (
            <div className="publish-data">
              <b>Publish Date: </b>
              {book.publishedDate}
            </div>
          )}
          {book.previewLink && (
            <div className="preview">
              <b>Preview Link: </b>
              <a
                href={book.previewLink}
                target={"_blank"}
                rel="noreferrer"
                className="link"
              >
                Click Here!
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookDetailsContent;
