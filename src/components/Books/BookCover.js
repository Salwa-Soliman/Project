import React from "react";
import classes from "./Books.module.css";

const BookCover = ({ url, details }) => {
  /*
  details indicates whether this component is rendered in page book details page or not
   if passed => component rendered in book details page
  */
  return (
    <div
      className={classes["book-cover"]}
      style={{
        width: details ? 300 : 128,
        height: details ? 400 : 193,
        minWidth: details ? 300 : 128,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    />
  );
};

export default BookCover;
