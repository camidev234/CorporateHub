import { BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import { useState } from "react";
import { ModalCommentStars } from "./ModalCommentStars";

export const ModalComment = ({ onCloseModal }) => {

  const [stars, setStars] = useState(0);
  
  const handleCloseModal = () => {
    onCloseModal();
  };

  const addStar = () => {
    setStars(stars + 1);
  };

  return (
    <div className="modal bg-gray-700 w-[30%] flex flex-col justify-center items-center p-3 rounded-lg z-60 opacity-100">
      <div className="modalContent w-full">
        <div className="t flex justify-between w-full">
          <h1>Agrega una reseña</h1>
          <BsX className="text-3xl cursor-pointer" onClick={handleCloseModal} />
        </div>
        <div className="stars flex items-center gap-2">
          <ModalCommentStars onAddStar={addStar}/>
          <span>{stars}</span>
        </div>
        <div className="form"></div>
      </div>
    </div>
  );
};

ModalComment.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
