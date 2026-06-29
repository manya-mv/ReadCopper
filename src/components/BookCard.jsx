import { FiMoreVertical } from "react-icons/fi";

function BookCard({ title, author, cover }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl shadow-md">
        <img
          src={cover}
          alt={title}
          className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <button className="absolute right-2 top-2 rounded-full bg-white/90 p-2 shadow hover:bg-white">
          <FiMoreVertical size={18} />
        </button>
      </div>

      <div className="mt-3">
        <h2 className="truncate font-semibold">{title}</h2>

        <p className="text-sm text-gray-500">{author}</p>

        <p className="mt-1 text-xs text-amber-600">
          Not Started
        </p>
      </div>
    </div>
  );
}

export default BookCard;