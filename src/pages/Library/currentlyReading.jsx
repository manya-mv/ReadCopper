import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookGrid from "../../components/BookGrid";

function WantToRead() {
  const { books } = useContext(BookContext);

  const currentlyReadingBooks = books.filter(
  (book) => book.status === "currently-reading"
);

return <BookGrid books={currentlyReadingBooks} />;
}

export default WantToRead;