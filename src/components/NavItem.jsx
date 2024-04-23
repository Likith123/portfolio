/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavItem({ to, children }) {
  function checkIsActive({ isActive }) {
    return isActive
      ? "font-bold filter transition duration-300 drop-shadow-lg"
      : undefined;
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
