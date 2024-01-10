import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsPlus } from "react-icons/bs";

export const EmailsInput = ({ onAddEmail }) => {

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleEmailClick = () => {
        onAddEmail(email);
        setEmail("");
    }

    return (
        <div className="addEmail flex items-end justify-between">
          <input
            type="text"
            placeholder="Agrege un email"
            className=" h-[2.3em] w-[85%]  bg-transparent border-b border-solid border-gray-500 pb-2 outline-none
          text-white focus:border-b focus:border-solid focus:border-white mt-3"
            onChange={handleEmailChange}
            value={email}
          />
          <button
            className="bg-green-500 w-[2em] h-[2em] text-white rounded-lg flex justify-center items-center"
            onClick={handleEmailClick}
          >
            <BsPlus />
          </button>
        </div>
    )
}

EmailsInput.propTypes = {
    onAddEmail: PropTypes.func.isRequired
}