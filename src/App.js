import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBooks } from "./store/books-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/:id" element={<BookDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
