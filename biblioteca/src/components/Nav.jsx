import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-center bg-stone-700 border-b-2 border-stone-500 py-2">
      <NavLink to={"/"} className={"text-base text-white font-semibold mx-2"}>
        Home
      </NavLink>
      <NavLink
        to={"/create"}
        className={"text-base text-white font-semibold mx-2"}
      >
        Create
      </NavLink>
    </nav>
  );
}

export default Nav;
