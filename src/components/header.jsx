import { FiSearch, FiBarChart2, FiUser } from "react-icons/fi";

export function Header() {
  return (
    <header className="h-20 px-6 border-b flex items-center justify-between">
      <h1 className="text-2xl font-bold text-amber-600">
        ReadCopper
      </h1>
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 w-80">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search books..."
          className="w-full outline-none"
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 cursor-pointer">
          <FiBarChart2 />
          <span>Stats</span>
        </button>
        <button className="flex items-center gap-2 cursor-pointer">
          <FiUser />
          <span>Profile</span>
        </button>
      </div>
    </header>
  );
}

export default Header;