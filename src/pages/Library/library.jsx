import { FiSearch, FiUpload } from "react-icons/fi";
import BookGrid from "../../components/BookGrid";
import { books } from "../../data/books";
import { useState } from "react";
import UploadModal from "../../components/UploadModal";

function Library() {
const [isModalOpen, setIsModalOpen] = useState(false);
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
        />
    </div>
  );
}

export default Library;
