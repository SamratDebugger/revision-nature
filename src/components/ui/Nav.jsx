import { Link } from "react-router";
import NavMenu from "./NavMenu";

export default function Nav() {
  return (
    <header className="absolute w-full">
      <div className="navbar max-w-360 mx-auto p-5 bg-transparent">
        <div className="navbar-start w-full">
          <Link to="/">
            <img
              className="max-w-15"
              src="/assets/images/logo-white.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            data-theme="dark"
            className="menu menu-horizontal px-1 bg-transparent"
          >
            <NavMenu />
          </ul>
        </div>
        <div className="navbar-end w-auto">
          <Link className="ml-5">
            <button className="btn btn-success btn-outline "> Account</button>
          </Link>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavMenu />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
