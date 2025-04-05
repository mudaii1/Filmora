import { useState, useRef, useEffect } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useGetSearchResults } from "../hooks/useGetSearchResults";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function SearchInput({ isMenuOpen, handleCloseMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const debouncedSearch = useDebounce(searchQuery, 500);
  const { searchResults } = useGetSearchResults(debouncedSearch);
  // Open search when menu is opened on mobile
  useEffect(() => {
    if (isMenuOpen) {
      setIsOpen(true);
    }
  }, [isMenuOpen]);

  useClickOutside(searchRef, () => {
    // Only close search if menu is not open (on mobile)
    if (!isMenuOpen) {
      setIsOpen(false);
      setSearchQuery("");
    }
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
    handleCloseMenu();
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div
        className={`flex items-center gap-2 rounded-full bg-gray-100/10 transition-all duration-300 ${
          isOpen
            ? isMenuOpen
              ? "w-full px-4 py-2"
              : "w-80 px-4 py-2"
            : "w-10 px-2 py-1"
        }`}
      >
        <IoSearch
          className={`cursor-pointer text-white ${
            isOpen ? "text-2xl" : "text-3xl"
          }`}
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for movies..."
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-400"
            />
            {searchQuery && (
              <IoClose
                className="cursor-pointer text-2xl text-white"
                onClick={handleClear}
              />
            )}
            {searchQuery && (
              <div className="bg-background-primary absolute top-12 right-0 left-0 z-60 flex flex-col gap-2 divide-y-2 divide-gray-400/30 rounded-t-xl">
                {searchResults?.slice(0, 5).map((result) => (
                  <Link
                    key={result.id}
                    to={`${result.media_type === "movie" ? `/movies/${result.original_title || result.name}/${result.id}` : `/shows/${result.name}/${result.id}`}`}
                    className="flex cursor-pointer items-center gap-2 px-4 py-2 transition-colors duration-200 hover:bg-gray-400/30"
                    onClick={handleClear}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                      alt={result.original_title || result.name}
                      className="h-10 w-10 rounded-md"
                    />
                    <h3>{result.original_title || result.name}</h3>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
