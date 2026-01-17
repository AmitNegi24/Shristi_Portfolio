import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type NavbarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-10">
      {/* LEFT */}
      <Link to="/" className="flex items-center gap-2">
        <h2 className="text-4xl festive-regular sm:text-3xl md:text-2xl cursor-pointer">
          Thinkers
        </h2>
      </Link>
      {/* CENTER (empty spacer for future use) */}
      <div className="flex-1"></div>

      {/* RIGHT */}
      <ul className="flex items-center gap-8">
        <li
          className="cursor-pointer hover:text-green-400 text-2xl"
          onClick={toggleDarkMode}
        >
          {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </li>

        <li>
          <a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            href="https://drive.google.com/file/d/1Px3gnQt_Qa0lHvL1Md6Q3RDsi4XWO4Nu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
