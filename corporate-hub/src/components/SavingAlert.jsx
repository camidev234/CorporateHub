import PropTypes from "prop-types";

export const SavingAlert = ({ isSend }) => {
    return (
      <div className="succesContainer fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        {isSend ? (
          <div className="spinnerCont rounded-2xl flex flex-col items-center bg-gray-700 w-[300px] h-[250px] justify-around">
            <div className="spinner"></div>
            <h1 className="text-white mt-20">Registrando empresa...</h1>
          </div>
        ) : null}
      </div>
    );
};

SavingAlert.propTypes = {
  isSend: PropTypes.bool.isRequired,
};
