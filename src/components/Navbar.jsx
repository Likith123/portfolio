import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <header className="text-primary tracking-wide flex justify-around items-center h-[10vh] w-full bg-lightBgColor text-xl font-medium sticky top-0 z-10 shadow-sm">
      {/* Logo */}
      <div>
        <Link to="/">
          <span>Image </span>
          <span>WyseGuy.</span>
        </Link>
      </div>

      {/* Navbar */}
      <nav className="nav">
        <ul className="flex gap-8 list-none">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contactMe">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
