import { NavLink } from "react-router-dom";

function NavItem({ to, children }) {
    function checkIsActive({ isActive }) {
        return isActive ? "font-bold underline" : undefined;
    }

    return (
        <li>
            <NavLink to={to} className={checkIsActive} end>
                {children}
            </NavLink>
        </li>
    );
}

export default NavItem;
