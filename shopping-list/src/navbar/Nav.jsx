import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-black flex justify-between items-center px-5 py-3 border-b border-gray-600">
      <div>
        <Link to={"/index"} className="text-white text-3xl font-bold">
          Oasis
        </Link>
      </div>
      <div>
        <Link to={"/login"} className="text-white text-sm font-bold mr-4">
          Iniciar sesión
        </Link>
        <Link to={"/registrarse"} className="text-white text-sm font-bold">
          Registrarse
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
