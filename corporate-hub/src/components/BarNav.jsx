import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../index.css";
import { SearchBar } from "./SearchBar";

export const BarNav = () => {

  return (
    <section className="barNav w-full h-full">
      <header className="header flex w-full h-full">
        <div className="logoApp flex w-[33%] justify-center items-center">
          <img src={logo} alt="logo" className="h-20 w-13" />
        </div>
        <div className="search w-[33%] flex justify-center items-center">
            <SearchBar/>
        </div>
        <div className="bar w-[33%] flex justify-endddd">
          <nav className="nav w-[100%]">
            <ul className="flex w-[100%] h-[100%] justify-evenly items-center">
              <li>
                <Link className="text-white hover:text-orange-300" to={'/'}>Inicio</Link>
              </li>
              <li>
                <Link className="text-white hover:text-orange-300" to={'/login'}>Iniciar Sesion</Link>
              </li>
              <li>
                <Link className="text-white hover:text-orange-300" to={'/register-company'}>Registrarse</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};
