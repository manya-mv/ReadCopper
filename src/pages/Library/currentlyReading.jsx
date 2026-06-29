import BookGrid from "../../components/BookGrid";
import { books } from "../../data/books";

function CurrentlyReading() {
  const currentlyReading = books.filter(
    (book) => book.status === "currently-reading"
  );

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Currently Reading
      </h1>

      <BookGrid books={currentlyReading} />
    </div>
  );
}

export default CurrentlyReading;