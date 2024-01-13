import { SearchBar } from "./SearchBar"
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { GeneralContext } from "../context/GeneralContext";
import { useContext } from "react";
import { logout } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export const BarNavAuth = () => {

    const { token, onLogout } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await logout(token);
            onLogout();
            console.log(response.data)
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="barNav w-full h-full">
      <header className="header flex w-full h-full">
        <div className="logoApp flex w-[33%] justify-center items-center">
          <img src={logo} alt="logo" className="h-20 w-13" />
        </div>
        <div className="search w-[33%] flex justify-center items-center">
            <SearchBar/>
        </div>
        <div className="bar w-[33%] flex justify-end">
          <nav className="nav w-[100%]">
            <ul className="flex w-[100%] h-[100%] justify-evenly items-center">
              <li>
                <Link className="text-white hover:text-orange-300" to={'/'}>Inicio</Link>
              </li>
              <li>
                <Link className="text-white hover:text-orange-300" onClick={handleLogout}>Cerrar Sesion</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
    )
}