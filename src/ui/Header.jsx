import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import SearchInput from "./SearchInput";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="container mx-auto">
      <div className="relative flex items-center justify-between bg-transparent px-4 py-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/images/logo.png"
              alt="Filmora"
              className="h-10 w-10 md:h-15 md:w-15"
            />
            <h1 className="text-2xl font-bold">Filmora</h1>
          </Link>
        </div>
        <TbMenuDeep
          className="z-50 cursor-pointer rounded-lg border-4 border-gray-400/30 px-2 py-2 text-5xl text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`bg-background-primary absolute top-20 left-0 h-screen w-full transform space-y-4 px-4 py-6 text-center text-lg shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen
              ? "z-50 translate-y-0 opacity-100"
              : "-z-50 translate-y-full opacity-0"
          }`}
        >
          <SearchInput
            isMenuOpen={isMenuOpen}
            handleCloseMenu={handleCloseMenu}
          />

          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-red-500"
                    : "transition-colors duration-200 hover:text-red-500"
                }
                onClick={handleCloseMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-red-500"
                    : "transition-colors duration-200 hover:text-red-500"
                }
                onClick={handleCloseMenu}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shows"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-red-500"
                    : "transition-colors duration-200 hover:text-red-500"
                }
                onClick={handleCloseMenu}
              >
                Shows
              </NavLink>
            </li>
          </ul>
        </div>
        <ul
          className={`z-10 hidden items-center gap-4 rounded-xl border-4 border-gray-400/30 px-3 py-5 text-lg lg:flex xl:px-5`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-gray-400/30 px-4 py-2"
                  : "transition-colors duration-200 hover:text-red-500"
              }
              onClick={handleCloseMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-gray-400/30 px-4 py-2"
                  : "transition-colors duration-200 hover:text-red-500"
              }
              onClick={handleCloseMenu}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shows"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-gray-400/30 px-4 py-2"
                  : "transition-colors duration-200 hover:text-red-500"
              }
            >
              Shows
            </NavLink>
          </li>
        </ul>
        <div
          className={`hidden items-center gap-4 lg:flex lg:justify-end xl:grow-0`}
        >
          <SearchInput />
          {/* <FiBell className="cursor-pointer text-xl transition-colors duration-200 hover:text-red-500 lg:text-4xl" /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
