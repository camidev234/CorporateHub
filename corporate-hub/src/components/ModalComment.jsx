import { BsX } from "react-icons/bs";
import PropTypes from 'prop-types';

export const ModalComment = ({ onCloseModal }) => {

    const handleCloseModal = () => {
      onCloseModal();  
    };

    return (
    <div className="modal bg-gray-700 w-[30%] flex flex-col justify-center items-center p-3 rounded-lg z-60 opacity-100">
      <div className="modalContent w-full">
        <div className="t flex justify-between w-full">
          <h1>Agrega una reseña</h1>
          <BsX className="text-3xl cursor-pointer" onClick={handleCloseModal}/>
        </div>
      </div>
    </div>
  );
};

ModalComment.propTypes = {
  onCloseModal: PropTypes.func.isRequired
}
