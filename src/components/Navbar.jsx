import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <header className="bg-primary-700-100 text-primary-700 sticky top-0 z-10 flex h-[10vh] w-full items-center justify-around text-xl font-medium tracking-wide shadow-sm">
      {/* Logo */}
      <div>
        <Link to="/">
          <span>Image </span>
          <span>WyseGuy.</span>
        </Link>
      </div>

      {/* Navbar */}
      <nav className="nav">
        <ul className="flex list-none gap-8">
          {/* <NavItem to="/">Home</NavItem> */}
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contactMe">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
