import { BsX } from "react-icons/bs";
import PropTypes from 'prop-types';

export const RegisterEmailsList = ({ emails, onDeleteEmail }) => {

    const deleteEmail = (index) => {
        onDeleteEmail(index);
    }

    return (
        <div className="emailList flex flex-wrap gap-2">
          {emails.map((emailActual, index) => {
            return (
              <span
                key={index}
                className=" text-white bg-gray-700 rounded-lg p-1 flex justify-center items-center gap-2"
              >
                {emailActual}{" "}
                <button
                  className="bg-gray-600 w-[25px] h-full rounded-full flex items-center justify-center"
                  onClick={() => deleteEmail(index)}
                >
                  <BsX />
                </button>
              </span>
            );
          })}
        </div>
    )
}

RegisterEmailsList.propTypes = {
    emails: PropTypes.array.isRequired,
    onDeleteEmail: PropTypes.func.isRequired
}