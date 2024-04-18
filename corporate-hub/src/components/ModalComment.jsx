import { BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import { useState } from "react";
import { ModalCommentStars } from "./ModalCommentStars";
import { FormComment } from "./FormComment";

export const ModalComment = ({ onCloseModal }) => {

  const [stars, setStars] = useState(0);

  const [ opinion, setOpinion ] = useState({
    autor: "",
    description: "",
    score: stars
  });
  
  const handleCloseModal = () => {
    onCloseModal();
  };

  const addStar = () => {
    setStars(stars + 1);
  };

  const deleteStar = () => {
    setStars(stars - 1);
  };

  return (
    <div className="modal bg-zinc-800 w-[40%] flex flex-col justify-center items-center p-5 rounded-lg z-6">
      <div className="modalContent w-full">
        <div className="t flex justify-between w-full text-lg">
          <h1>Agrega una reseña</h1>
          <BsX className="text-3xl cursor-pointer" onClick={handleCloseModal} />
        </div>
        <div className="stars flex items-center gap-2 mb-2">
          <ModalCommentStars onAddStar={addStar} onDeleteStar={deleteStar}/>
          <span>{stars}</span>
        </div>
        <div className="form">
          <FormComment stars={stars}/>
        </div>
      </div>
    </div>
  );
};

ModalComment.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
