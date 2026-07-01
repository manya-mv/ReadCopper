import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookGrid from "../../components/BookGrid";

function WantToRead() {
  const { books } = useContext(BookContext);

  const finishedBooks = books.filter(
  (book) => book.status === "finished"
);

return <BookGrid books={finishedBooks} />;
}

export default WantToRead;