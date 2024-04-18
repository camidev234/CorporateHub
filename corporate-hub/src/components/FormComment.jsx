import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const FormComment = ({ stars, onCancelOpinion, onCloseModal }) => {
  const [disabled, setDisabled] = useState(true);

  const [opinion, setOpinion] = useState({
    autor: "",
    description: "",
    score: stars,
  });

  const stylesDisabled =
    "w-[47%] p-2 rounded-md font-medium bg-zinc-700 text-zinc-400";

  const handleAutorChange = (e) => {
    setOpinion({ ...opinion, autor: e.target.value });
  };

  const handleChangeDescription = (e) => {
    setOpinion({ ...opinion, description: e.target.value });
  };

  useEffect(() => {
    if (stars < 1 || opinion.autor.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [stars, opinion.autor]);

  const cancel = () => {
    if(opinion.description.length == 0 && opinion.autor.length == 0) {
        onCloseModal();
    } else {
        onCancelOpinion();
    }
  };

  return (
    <form action="" className="w-[100%] flex flex-col pb-2 pt-2 gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Autor"
        value={opinion.autor}
        onChange={handleAutorChange}
        className="w-full h-10 bg-transparent pl-2 border-[1px] rounded-md focus:border-blue-300 focus:outline-none"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={opinion.description}
        placeholder="Escriba aca su Reseña"
        onChange={handleChangeDescription}
        className="w-full pl-2 bg-transparent resize-none pt-2 border-[1px] rounded-md outline-none focus:border-blue-300"
      ></textarea>
      {opinion.description.length >= 1 ? (
        <section className="counterchars w-full pl-1">
          <span>{opinion.description.length} / 1000</span>
        </section>
      ) : null}
      <section className="btns flex gap-[5%] justify-center">
        <button
          className="w-[47%] p-2 rounded-md border-[1px] font-medium text-blue-300 hover:bg-gray-400 hover:bg-opacity-10"
          onClick={cancel}
        >
          Cancelar
        </button>
        <button
          className={
            disabled
              ? stylesDisabled
              : "w-[47%] p-2 rounded-md font-medium bg-blue-800 hover:bg-blue-900"
          }
          disabled={stars < 1 ? true : false}
        >
          Publicar Reseña
        </button>
      </section>
    </form>
  );
};

FormComment.propTypes = {
  stars: PropTypes.number.isRequired,
  onCancelOpinion: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired
};
