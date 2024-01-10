import { useState } from "react";
import PropTypes from 'prop-types';
import { BsPlus } from "react-icons/bs";

export const PhonesInput = ({ onAddPhone }) => {
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handlePhoneClick = () => {
        onAddPhone(phone);
        setPhone("");
    }

    return (
        <div className="addPhone flex items-end justify-between">
          <input
            type="text"
            placeholder="Agrege un telefono"
            className=" h-[2.3em] w-[85%]  bg-transparent border-b border-solid border-gray-500 pb-2 outline-none
          text-white focus:border-b focus:border-solid focus:border-white mt-3"
            onChange={handlePhoneChange}
            value={phone}
          />
          <button
            className="bg-green-500 w-[2em] h-[2em] text-white rounded-lg flex justify-center items-center"
            onClick={handlePhoneClick}
          >
            <BsPlus />
          </button>
        </div>
    )
}

PhonesInput.propTypes = {
    onAddPhone: PropTypes.func.isRequired
}