import { BsX } from "react-icons/bs";
import PropTypes from 'prop-types';

export const RegisterPhonesList = ({ phones, onDeletePhone }) => {

    const deletePhone = (index) => {
        onDeletePhone(index);
    }

    return (
        <div className="phonesList flex flex-wrap gap-2">
          {phones.map((phoneActual, index) => {
            return (
              <span
                key={index}
                className=" text-white bg-gray-700 rounded-lg p-1 flex justify-center items-center gap-2"
              >
                {phoneActual}{" "}
                <button
                  className="bg-gray-600 w-[25px] h-full rounded-full flex items-center justify-center hover:bg-gray-800"
                  onClick={() => deletePhone(index)}
                >
                  <BsX />
                </button>
              </span>
            );
          })}
        </div>
    )
}

RegisterPhonesList.propTypes = {
    phones: PropTypes.array.isRequired,
    onDeletePhone: PropTypes.func.isRequired
}