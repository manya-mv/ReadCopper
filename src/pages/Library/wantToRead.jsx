import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookGrid from "../../components/BookGrid";

function WantToRead() {
  const { books } = useContext(BookContext);

  const wantToReadBooks = books.filter(
    (book) => book.status === "want-to-read"
  );

  return <BookGrid books={wantToReadBooks} />;
}

export default WantToRead;