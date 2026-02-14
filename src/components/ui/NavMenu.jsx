import { NavLink } from "react-router";

export default function NavMenu() {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "menu-active" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "menu-active" : "")}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "menu-active" : "")}
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "menu-active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
}
