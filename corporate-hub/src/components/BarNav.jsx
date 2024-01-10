import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../index.css";

export const BarNav = () => {
  return (
    <section className="barNav bg-white w-full h-full">
      <header className="header flex bg-blue-400 w-full h-full">
        <div className="logoApp flex w-[30%] justify-center items-center">
          <img src={logo} alt="logo" className="h-20 w-13" />
        </div>
        <div className="bar bg-red-700 w-[30%] flex justify-end">
          <nav className="nav bg-green-400 w-[100%]">
            <ul className="flex bg-red-300 w-[100%] h-[100%] justify-evenly items-center">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Sign In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};
