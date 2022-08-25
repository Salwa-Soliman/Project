import SearchBar from "../components/Searching/SearchBar";
import SearchResults from "../components/Searching/SearchResults";

const Search = () => {
  return (
    <div className="search-books">
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Search;
