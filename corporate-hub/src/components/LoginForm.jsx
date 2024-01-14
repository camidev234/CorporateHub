import { useState } from "react";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { Link } from "react-router-dom";
import { BsBuildings, BsKeyFill, BsEye, BsEyeSlash } from "react-icons/bs";
import { loginUser, errorService as e } from "../services/AuthService";
import { LoginWindow } from "./LoginWindow";
import { ErrorLogin } from "./ErrorLogin";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

  const navigate = useNavigate();

  const { onLogin,  onGetCompanyName, onGetUserAuthInfo } = useContext(GeneralContext);
  const [showPassword, setShowPassword] = useState(false);

  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState(0);

  const [nit, setNit] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNitChange = (e) => {
    setNit(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const authUser = async () => {
    try {
      setLoading(true);
      const response = await loginUser(nit, password);
      if (response.status === 200) {
        onLogin(response.data.auth_data.access_token);
        onGetCompanyName(response.data.auth_data.user.company_name);
        onGetUserAuthInfo(response.data.auth_data.user);
        navigate('/dashboard/my-company');
        console.log(response.data);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      setErrorCode(e);
      setTimeout(() => {
        setError(false);
      }, 1800);
      throw error;
    } finally {
        setLoading(false);
    }
  };

  return (
    <section className="loginForm">
      {
        loading ? (
            <LoginWindow isLoading={loading} hasError={hasError} errorCode={errorCode}/>
        ) : null
      }
      {
        hasError ? (
            <ErrorLogin errorCode={errorCode}/>
        ) : null
      }
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-10"
      >
        <div className="input flex p-2 border-b-2 border-solid bg-gray-700 w-[100%]">
          <div className="icon w-[10%] flex justify-center items-center">
            <BsBuildings className="text-white" />
          </div>
          <div className="line bg-white w-[0.6%]"></div>
          <div className="inp w-[78%] ml-[2.4%]">
            <input
              type="text"
              placeholder="Nit"
              className="h-[2.3em]s  outline-none
          text-white bg-transparent w-full"
              onChange={handleNitChange}
              value={nit}
            />
          </div>
        </div>
        <div className="input flex p-2 border-b-2 border-solid bg-gray-700 w-[100%]">
          <div className="icon w-[10%] flex justify-center items-center">
            <BsKeyFill className="text-white" />
          </div>
          <div className="line bg-white w-[0.6%]"></div>
          <div className="inp w-[88%] ml-[2.4%] relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="h-[2.3em]s outline-none text-white bg-transparent w-full pr-10"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div
            className="cursor-pointer text-white w-[9%] flex justify-center items-center"
            onClick={handleTogglePassword}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </div>
        </div>
        <button
          className="bg-blue-800 h-9 text-white hover:bg-orange-600 rounded-xl"
          onClick={authUser}
        >
          Iniciar sesión
        </button>
      </form>
      <div className="info flex flex-col justify-between items-center mt-4 ">
        <span className="text-white">¿No tienes una cuenta?</span>
        <Link className="text-blue-400 p-1 text-sm" to={"/register-company"}>
          Registra tu empresa
        </Link>
      </div>
    </section>
  );
};
