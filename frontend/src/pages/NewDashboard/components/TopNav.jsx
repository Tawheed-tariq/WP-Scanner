import { FaSlidersH } from "react-icons/fa";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { createPortal } from "react-dom";


const TopNav = ({ title, toggle, open, setShowlogoutPopup, currUsr }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="py-2 px-6 w-[inherit] bg-white flex items-center shadow-md shadow-black/5 fixed z-30">
      <button
        onClick={toggle}
        type="button"
        className="text-lg text-gray-900 font-semibold sidebar-toggle"
      >
        <FaSlidersH size={24} />
      </button>

      <ul className="ml-auto flex items-center">
        <li className="mr-2 dropdown">
          <form action="" className="p-4">
            <div className="relative w-full">
              <input
                type="text"
                className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                placeholder="Search..."
              />
              <CiSearch className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-900" />
            </div>
          </form>
        </li>
        <li className="dropdown">
          <button
            type="button"
            className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600"
          >
            btn2
          </button>
        </li>

        <li className="dropdown ml-3 relative">
          <button
            type="button"
            className="dropdown-toggle flex items-center"
            onClick={handleDropdownToggle}
          >
            <div className="flex-shrink-0 w-10 h-10 relative">
              <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                  alt=""
                />
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div className="p-1 md:block text-left">
              <h2 className="text-md font-semibold text-gray-800">{currUsr}</h2>
            </div>
          </button>
        </li>
      </ul>

      <DropdownMenu isDropdownOpen={isDropdownOpen} currUsr={currUsr} />
    </div>
  );
};

const DropdownMenu = ({ isDropdownOpen, currUsr }) => {
  return createPortal(
    <ul
      className={`dropdown-menu shadow-md shadow-black/5 z-40 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px] absolute ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      style={{ top: "4rem", left: "calc(100% - 10rem)" }} // Adjust position as needed
    >
      <li>
        <a
          href="#"
          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
        >
          Profile
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
        >
          Settings
        </a>
      </li>
      <li>
        <form method="POST" action="">
          <a
            role="menuitem"
            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              // Add your logout logic here
            }}
          >
            Log Out
          </a>
        </form>
      </li>
    </ul>,
    document.getElementById("dropdown-root")
  );
};


export default TopNav;