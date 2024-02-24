import { Link, NavLink } from "react-router-dom";

function Navbar() {
    function checkIsActive({isActive}) {
        return isActive? "font-bold underline" : undefined;
    }

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
                        <NavLink to="/" className={checkIsActive} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={checkIsActive} end>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={checkIsActive} end>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactMe" className={checkIsActive} end>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
