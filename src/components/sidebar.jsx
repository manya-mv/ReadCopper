import { NavLink } from "react-router-dom";
function Sidebar() {
  const libraryItems = [
    {
      name: "All Books",
      path: "/library",
    },
    {
      name: "Currently Reading",
      path: "/library/currently-reading",
    },
    {
      name: "Want to Read",
      path: "/library/want-to-read",
    },
    {
      name: "Finished",
      path: "/library/finished",
    },
    {
      name: "Favorites",
      path: "/library/favorites",
    },
  ];

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "My Shelves",
      path: "/shelves",
    },
    {
      name: "Reading Stats",
      path: "/stats",
    },
    {
      name: "Highlights",
      path: "/highlights",
    },
    {
      name: "Notes",
      path: "/notes",
    },
    {
      name: "Resources",
      path: "/resources",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside className="w-64 h-[calc(100vh-64px)] border-r p-6">
      <nav className="flex flex-col gap-6">
        {/* Home */}
        <div>
          <h2 className="font-medium cursor-pointer hover:text-amber-600">
            <NavLink to="/">{menuItems[0].name}</NavLink>
          </h2>
        </div>

        <div>
          <h2 className="font-medium mb-3">Library</h2>

          <ul className="ml-4 flex flex-col gap-2">
            {libraryItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="text-gray-600 hover:text-amber-600"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {menuItems.slice(1).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="font-medium hover:text-amber-600"
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
