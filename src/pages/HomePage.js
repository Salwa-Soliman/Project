import React from "react";
import ShelvesList from "../components/Shelves/ShelvesList";
import Title from "../components/common/Title";
import SearchBook from "../components/UI/SearchBook";

const HomePage = () => {
  return (
    <div className="list-books">
      <Title>My Reads</Title>
      <ShelvesList />
      <SearchBook />
    </div>
  );
};

export default React.memo(HomePage);
