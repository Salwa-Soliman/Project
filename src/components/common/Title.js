import React from "react";
import classes from "./Title.module.css";
const Title = (props) => {
  return (
    <div className={classes["list-books-title"]}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default React.memo(Title);
