import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex justify-end md:mx-28">
        <div className="md:mt-10">
          {/* Desktop Menu */}
          <div className="flex items-center gap-5">
            {" "}
            <ul className="hidden md:flex md:gap-20 bg-[#D6D7D7] py-2 px-5 rounded-xl shadow-xl font-darker text-xl">
              <li>
                <Link to={"/"} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:text-white">
                  About Me
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-white">
                  Lets Talk
                </Link>
              </li>
            </ul>
            <div className="rounded-full border-x-white border-2 p-2 md:block hidden  hover:bg-SecondColor hover:text-white hover:transition hover:delay-100">
              <Link to={"/login"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden fixed top-4 right-4 z-20 bg-[#D6D7D7] p-2 rounded-md"
          >
            {/* <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`bg-black h-0.5 w-full transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`bg-black h-0.5 w-full transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`bg-black h-0.5 w-full transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-[#D6D7D7] z-10 font-darker text-xl space-y-8">
              <li>
                <Link
                  className="hover:text-white"
                  to={"/"}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white"
                  to={"/about"}
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white"
                  to={"/"}
                  onClick={() => setIsOpen(false)}
                >
                  Lets Talk
                </Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
