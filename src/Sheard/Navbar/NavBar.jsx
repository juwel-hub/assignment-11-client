import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.jpg";

const NavBar = () => {
  const navInfo = (
    <>
      <li className="text-xl hover:text-white hover:bg-orange-400 font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-orange-400 "
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>Home</a>
        </NavLink>
      </li>

      <li className="text-xl hover:text-white hover:bg-orange-400 font-bold">
        <NavLink
          to="/availableFood"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-orange-400"
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>Available Food</a>
        </NavLink>
      </li>
      <li className="text-xl hover:text-white hover:bg-orange-400 font-bold">
        <NavLink
          to="/addFood"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-orange-400"
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>Add Food</a>
        </NavLink>
      </li>
      <li className="text-xl hover:text-white hover:bg-orange-400 font-bold">
        <NavLink
          to="/manageMyFood"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-orange-400"
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>Manage My Food</a>
        </NavLink>
      </li>
      <li className="text-xl hover:text-white hover:bg-orange-400 font-bold">
        <NavLink
          to="/myFoodRequest"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-orange-400 "
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>My Food Request</a>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5  w-5"
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navInfo}
          </ul>
        </div>
        <img className="w-14 rounded-full" src={logo} alt="" />
        <Link to="/" className="btn btn-ghost text-xl md:text-4xl font-bold ">
          Delicious
          <span className="text-orange-400 ">Food</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <a className="btn bg-orange-400 text-xl font-bold text-white">
            Login
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
