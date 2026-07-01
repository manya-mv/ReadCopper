// import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BookMenu from "./BookMenu";
function BookCard({book}) {
  const { title, author, cover, status } = book;
  const navigate = useNavigate();
  return (
    <div className="group cursor-pointer">
      <div className="relative bg-amber-50 rounded-xl shadow-md">
        <BookMenu book={book} />
        <img
        onClick={() => navigate(`/reader/${book.id}`)}
          src={
            cover || "https://placehold.co/250x350/e8d5b7/4b3621?text=No+Cover"
          }
          alt={title}
          className="h-72 w-full rounded-xl object-cover"
        />
      </div>

      <div className="mt-3">
        <h2 className="truncate font-semibold">{title}</h2>

        <p className="text-sm text-gray-500">{author}</p>

        <p className="mt-1 text-xs font-medium text-amber-600">
  {status
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())}
</p>
      </div>
    </div>
  );
}

export default BookCard;
