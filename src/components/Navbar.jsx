import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-[10vh] w-full items-center justify-around bg-primary-100 text-xl font-medium tracking-wide text-primary-700 shadow-sm">
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
