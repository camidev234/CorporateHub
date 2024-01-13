import PropTypes from "prop-types";
import { BsExclamationTriangleFill } from "react-icons/bs";

export const ErrorLogin = ({ errorCode }) => {
  return (
    <div className="succesContainer fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="rounded-2xl flex flex-col items-center bg-gray-700 w-[300px] h-[250px] gap-4 justify-center">
        <div className=""><BsExclamationTriangleFill className="text-yellow-500 text-3xl"/></div>
        {errorCode === 401 ? (
          <h1 className="text-white">Credenciales incorrectas</h1>
        ) : (
          <h1 className="text-white">Error interno del servidor</h1>
        )}
      </div>
    </div>
  );
};

ErrorLogin.propTypes = {
  errorCode: PropTypes.number,
};
