import BookGrid from "../../components/BookGrid";
import { books } from "../../data/books";

function WantToRead() {
  const wantToRead = books.filter(
    (book) => book.status === "want-to-read"
  );

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Want to Read
      </h1>

      <BookGrid books={wantToRead} />
    </div>
  );
}

export default WantToRead;