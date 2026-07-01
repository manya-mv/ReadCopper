import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { FiMoreVertical } from "react-icons/fi";

function BookMenu({ book}) {
  const [open, setOpen] = useState(false);
const {
  toggleFavorite,
  changeStatus,
  deleteBook,
} = useContext(BookContext);
  return (
    <div className="absolute top-2 right-2">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full p-2 hover:bg-gray-200 transition"
      >
        <FiMoreVertical size={20} />
      </button>

      {open && (
  <div
    onMouseLeave={() => setOpen(false)}
    className="absolute right-0 mt-2 w-56 rounded-lg border bg-white shadow-xl z-50"
  >
    <button
      onClick={() => {
        toggleFavorite(book.id);
        setOpen(false);
      }}
      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
    >
      {book.favourite ? "💔 Remove Favorite" : "⭐ Add to Favorites"}
    </button>

    <button
      onClick={() => {
        changeStatus(book.id, "currently-reading");
        setOpen(false);
      }}
      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
    >
      📖 Currently Reading
    </button>

    <button
      onClick={() => {
        changeStatus(book.id, "want-to-read");
        setOpen(false);
      }}
      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
    >
      📚 Want to Read
    </button>

    <button
      onClick={() => {
        changeStatus(book.id, "finished");
        setOpen(false);
      }}
      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
    >
      ✅ Finished
    </button>

    <hr />

    <button
      onClick={() => {
        deleteBook(book.id);
        setOpen(false);
      }}
      className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
    >
      🗑 Delete
    </button>
  </div>
)}
    </div>
  );
}

export default BookMenu;
