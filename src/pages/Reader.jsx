import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";

function Reader() {
  const { id } = useParams();
  const { books } = useContext(BookContext);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="p-10 text-center">
        Book not found.
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{book.title}</h1>

      <p className="text-gray-600">{book.author}</p>

      <p className="mt-10">
        Reader coming soon...
      </p>
    </div>
  );
}

export default Reader;