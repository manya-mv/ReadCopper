import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookGrid from "../../components/BookGrid";

function WantToRead() {
  const { books } = useContext(BookContext);

  const favouriteBooks = books.filter(
  (book) => book.favourite
);

return <BookGrid books={favouriteBooks} />;
}

export default WantToRead;