import { BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import { useState } from "react";
import { ModalCommentStars } from "./ModalCommentStars";
import { FormComment } from "./FormComment";

export const ModalComment = ({ onCloseModal, company_id }) => {
  const [stars, setStars] = useState(0);

  const [cancelOpinion, setCancelOpinion] = useState(false);

  const handleCancelModal = () => {
    setCancelOpinion(true);
  };

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
        {cancelOpinion ? (
          <div className="cancelop w-full h-10 mb-2 mt-2 pl-2 border-t-[1px] border-zinc-900 border-b-[1px]">
            <article className="confirm w-full h-full flex items-center justify-between">
              <span>¿Seguro que quieres descartar esta opinion?</span>
              <article className="w-36 flex justify-around">
                <button className="w-10 rounded-sm hover:bg-zinc-500 hover:bg-opacity-20" onClick={handleCloseModal}>Si</button>
                <button className="w-10 rounded-sm hover:bg-zinc-500 hover:bg-opacity-20" onClick={() => setCancelOpinion(false)}>No</button>
              </article>
            </article>
          </div>
        ) : null}
        <div className="stars flex items-center gap-2 mb-2">
          <ModalCommentStars onAddStar={addStar} onDeleteStar={deleteStar} />
          <span>{stars}</span>
        </div>
        <div className="form">
          <FormComment stars={stars} onCancelOpinion={handleCancelModal} onCloseModal={handleCloseModal} company_id={company_id}/>
        </div>
      </div>
    </div>
  );
};

ModalComment.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  company_id: PropTypes.number.isRequired
};
