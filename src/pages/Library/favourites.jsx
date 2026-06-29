import BookGrid from "../../components/BookGrid";
import { books } from "../../data/books";

function Favorites() {
  const favoriteBooks = books.filter(
    (book) => book.favourite
  );

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Favorites
      </h1>

      <BookGrid books={favoriteBooks} />
    </div>
  );
}

export default Favorites;