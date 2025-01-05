import { Grid2x2, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative w-full h-16 shadow-xl shadow-gray-400 border-b-1 border-gray-900">
    
      <div
        className="absolute top-0 left-0 h-full w-full bg-blue-900 flex items-center px-4 z-10"
        style={{
          clipPath: "polygon(0 0, 30% 0, 25% 100%, 0 100%)",
        }}
      >
        <div className="rounded-md bg-white mr-6 icon border-0">
        <Grid2x2 size={32} color="#1e3a8a" className=""/>
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
    </header>
  );
};

export default Header;
