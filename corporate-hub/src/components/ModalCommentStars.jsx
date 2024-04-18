import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import PropTypes from 'prop-types';

export const ModalCommentStars = ({ onAddStar, onDeleteStar }) => {
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
        starOneIsClicked ? onDeleteStar() : onAddStar(); 
        break;
      case 2:
        // if(!starOneIsClicked) {
        //   setStarOneIsClicked(!starOneIsClicked);
        // }
        setStarTwoIsClicked(!starTwoIsClicked);
        starTwoIsClicked ? onDeleteStar() : onAddStar(); 
        break;
      case 3:
        // if(!starOneIsClicked && !starTwoIsClicked) {
        //   setStarOneIsClicked(!starOneIsClicked);
        //   setStarTwoIsClicked(!starTwoIsClicked);
        // }
        setStarThreeIsClicked(!starThreeIsClicked);
        starThreeIsClicked ? onDeleteStar() : onAddStar(); 
        break;
      case 4:
        // if(!starOneIsClicked && !starTwoIsClicked && !starThreeIsClicked) {
        //   setStarOneIsClicked(!starOneIsClicked);
        //   setStarTwoIsClicked(!starTwoIsClicked);
        //   setStarThreeIsClicked(!starThreeIsClicked);
        // }
        setStarFourIsClicked(!starFourIsClicked);
        starFourIsClicked ? onDeleteStar() : onAddStar(); 
        break;
      case 5:
        // if(!starOneIsClicked && !starTwoIsClicked && !starThreeIsClicked && !starFourIsClicked) {
        //   setStarOneIsClicked(!starOneIsClicked);
        //   setStarTwoIsClicked(!starTwoIsClicked);
        //   setStarThreeIsClicked(!starThreeIsClicked);
        //   setStarFourIsClicked(!starFourIsClicked);
        // }
        setStarFiveIsClicked(!starFiveIsClicked);
        starFiveIsClicked ? onDeleteStar() : onAddStar(); 
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

ModalCommentStars.propTypes = {
  onAddStar: PropTypes.func.isRequired,
  onDeleteStar: PropTypes.func.isRequired
}
