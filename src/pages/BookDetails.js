import { useParams } from "react-router-dom";
import BookDetailsContent from "../components/Books/BookDetailsContent";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const BookDetails = () => {
  const { id } = useParams();

  return (
      <div className="book-details">
        <BookDetailsContent id={id} />
      </div>
   );
};

export default BookDetails;
