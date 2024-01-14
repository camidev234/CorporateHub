import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsFillChatRightTextFill, BsBuildingsFill } from "react-icons/bs";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { logout } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
// import { ActualPage } from "./ActualPage";

export const DashboardNav = ({ companyName }) => {

    const { onLogout, token } = useContext(GeneralContext);
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
    <aside className="sidebar w-full h-full flex items-center p-6">
      <div className="bar w-full h-[83%] flex flex-col p-5 gap-5">
        <article className="company">
          <h1 className="text-white text-2xl">{companyName}</h1>
        </article>
        <article className="nav  flex flex-col justify-around h-[80%]">
          <div className="l">
            <Link className="flex text-white items-center gap-3">
              <BsBuildingsFill /> Mi Empresa
            </Link>
          </div>
          <div>
            <Link className="flex  text-white items-center gap-3">
              <BsFillChatRightTextFill /> Comentarios
            </Link>
          </div>
          <div className="l">
            <Link className="flex text-white items-center gap-3" onClick={handleLogout}>
              <BsArrowRightSquareFill /> Cerrar Sesion
            </Link>
          </div>
        </article>
      </div>
    </aside>
  );
};

DashboardNav.propTypes = {
  companyName: PropTypes.string.isRequired,
};
