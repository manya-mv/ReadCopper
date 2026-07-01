import { FiSearch, FiUpload } from "react-icons/fi";
import BookGrid from "../../components/BookGrid";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { useState } from "react";
import UploadModal from "../../components/UploadModal";
import { createBook } from "../../services/bookService";
// import { saveBookFile } from "../../services/storageService";

function Library() {
  const { books, setBooks } = useContext(BookContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function handleUpload(file) {
    try {
      const newBook = await createBook(file);

      setBooks((prevBooks) => [...prevBooks, newBook]);
    } catch (error) {
      alert(error.message);
    }
  }
  

  return (
    <div className="p-8">
      {/* Top Section */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Books</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 font-medium text-white hover:bg-amber-700"
        >
          <FiUpload />
          Upload Book
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search books..."
          className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-amber-500"
        />
      </div>

      {/* Books */}
      <BookGrid books={books} />
      <UploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
}

export default Library;
