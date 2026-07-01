import BookCard from "./BookCard";

function BookGrid({ books }) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books.map((book) => (
  <BookCard key={book.id} book={book} />
))}
    </div>
  );
}

export default BookGrid;