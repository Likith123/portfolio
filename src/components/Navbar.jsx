import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="text-[#0693f0] flex justify-around items-center h-16 w-full bg-[#f4f5ff] text-xl font-medium sticky top-0 z-10">
            {/* Logo */}
            <div>
                <Link to="/">
                    <span>Image </span>
                    <span>Portfolio.</span>
                </Link>
            </div>

            {/* Navbar */}
            <nav className="nav">
                <ul className="flex gap-8 list-none">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contactMe">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
