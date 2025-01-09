import { Grid2x2 } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(MenuContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative w-full h-16 shadow-lg shadow-gray-400 border-b border-gray-900">
      <div
        className="absolute top-0 left-0 h-full w-full bg-blue-900 flex items-center px-4 z-10"
        style={{
          clipPath: "polygon(0 0, 30% 0, 25% 100%, 0 100%)",
        }}
      >
        <div
          className="rounded-md bg-white mr-6 icon border-0 cursor-pointer"
          onClick={handleClick}
        >
          <Grid2x2 size={32} color="#1e3a8a" />
        </div>
        <img
          src="https://image.similarpng.com/very-thumbnail/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png"
          alt="logo"
          className="h-8 w-auto"
        />
        <span className="text-xl font-bold ml-2 text-white">Project</span>
      </div>

      <div
        className="absolute top-0 right-0 h-full w-full bg-white flex items-center justify-end px-12 z-20"
        style={{
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 40% 100%)",
        }}
      >
        <nav className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-500 underline"
                  : "hover:bg-blue-600 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-500 underline"
                  : "hover:bg-blue-600 hover:text-white"
              }`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white z-30 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-blue-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-xl font-bold cursor-pointer"
            onClick={handleClick}
          >
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {state.menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 opacity-50 z-20"
          onClick={handleClick}
        ></div>
      )}
    </header>
  );
};

export default Header;