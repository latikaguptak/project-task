import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex flex-row justify-between p-4 ">
        <div className="flex flex-row">
            <img
              src="https://image.similarpng.com/very-thumbnail/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png"
              alt="logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">Project</span>
  
        </div>
        <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium hover:text-gray-700 ${
              isActive ? "bg-white text-blue-500 underline" : "hover:bg-blue-600"
            }`
          }
        >
          Home
        </NavLink>
       
  
        </nav>
    </header>
  )
}

export default Header