import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import PropTypes from 'prop-types';

export const ModalCommentStars = ({ onAddStar }) => {
  const starColor = "text-yellow-500";

  const [starOneIsClicked, setStarOneIsClicked] = useState(false);
  const [starTwoIsClicked, setStarTwoIsClicked] = useState(false);
  const [starThreeIsClicked, setStarThreeIsClicked] = useState(false);
  const [starFourIsClicked, setStarFourIsClicked] = useState(false);
  const [starFiveIsClicked, setStarFiveIsClicked] = useState(false);

  const handleStarClick = (starNumber) => {
    switch (starNumber) {
      case 1:
        setStarOneIsClicked(!starOneIsClicked);
        break;
      case 2:
        setStarTwoIsClicked(!starTwoIsClicked);
        break;
      case 3:
        setStarThreeIsClicked(!starThreeIsClicked);
        break;
      case 4:
        setStarFourIsClicked(!starFourIsClicked);
        break;
      case 5:
        setStarFiveIsClicked(!starFiveIsClicked);
        break;
      default:
        null;
    }
  };

  return (
    <section className="flex gap-1">
      {!starOneIsClicked ? (
        <BsStar onClick={() => handleStarClick(1)} />
      ) : (
        <BsStarFill className={starColor} onClick={() => handleStarClick(1)} />
      )}
      {!starTwoIsClicked ? (
        <BsStar onClick={() => handleStarClick(2)} />
      ) : (
        <BsStarFill className={starColor} onClick={() => handleStarClick(2)} />
      )}
      {!starThreeIsClicked ? (
        <BsStar onClick={() => handleStarClick(3)} />
      ) : (
        <BsStarFill className={starColor} onClick={() => handleStarClick(3)} />
      )}
      {!starFourIsClicked ? (
        <BsStar onClick={() => handleStarClick(4)} />
      ) : (
        <BsStarFill className={starColor} onClick={() => handleStarClick(4)} />
      )}
      {!starFiveIsClicked ? (
        <BsStar onClick={() => handleStarClick(5)} />
      ) : (
        <BsStarFill className={starColor} onClick={() => handleStarClick(5)} />
      )}
    </section>
  );
};
