import BookGrid from "../../components/BookGrid";
import { books } from "../../data/books";

function Finished() {
  const finishedBooks = books.filter(
    (book) => book.status === "finished"
  );

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Finished
      </h1>

      <BookGrid books={finishedBooks} />
    </div>
  );
}

export default Finished;