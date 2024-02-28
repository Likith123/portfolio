import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
    return (
        <header className="text-[#0693f0] flex justify-around items-center h-16 w-full bg-[#f4f5ff] text-xl font-medium sticky top-0 z-10">
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
