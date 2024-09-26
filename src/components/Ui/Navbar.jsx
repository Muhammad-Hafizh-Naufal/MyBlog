import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex justify-end md:mx-28">
        <div className="md:mt-10">
          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden fixed top-4 right-4 z-20 bg-[#D6D7D7] p-2 rounded-md"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
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
            </div>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-[#D6D7D7] z-10 font-darker text-xl space-y-8">
              <li>
                <a
                  className="hover:text-white"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Lets Talk
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Portofolio
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
