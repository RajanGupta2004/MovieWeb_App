import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { navigation } from "../constants/navigation";

const Header = () => {
  const location = useLocation();
  const searchQuery = location.search.slice(3).split("%20").join(" ");
  const [searchInputs, setSearchInputs] = useState(searchQuery);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInputs) {
      navigate(`/search?q=${searchInputs}`);
    }
  }, [searchInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <header className="fixed top-0 w-full p-4 h-16 bg-black bg-opacity-85 z-30">
        <div className="container mx-auto px-4 flex items-center">
          <div>
            <Link to="/">
              <h3>MOVIES</h3>
            </Link>
          </div>
          <nav className=" hidden lg:flex items-center  gap-3 ml-4">
            {navigation.map((item, i) => (
              <div key={i}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-red-600  ${isActive && "text-neutral-300"}`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </nav>

          <div className="ml-auto  rounded-full cursor-pointer flex items-center gap-3">
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input
                value={searchInputs}
                onChange={(e) => setSearchInputs(e.target.value)}
                type="text"
                placeholder="search here..."
                className=" hidden lg:block bg-transparent py-1 px-4 mx-3 outline-none     cursor-pointer rounded-md text-white "
              />
              <button>
                <IoSearch size={22} />
              </button>
            </form>
            <div>
              <FaUserLarge size={22} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
