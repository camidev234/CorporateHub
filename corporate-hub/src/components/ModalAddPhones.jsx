import { PhonesInput } from "./PhonesInput";
import { RegisterPhonesList } from "./RegisterPhonesList";
import { BsX } from "react-icons/bs";
import PropTypes from 'prop-types';

export const ModalAddPhones = ({
  onCloseModal,
  onAddPhone,
  onDeletePhone,
  phonesAdd,
  onSavePhones
}) => {

  const handleCloseModal = () => {
    onCloseModal();
  }

  const handleAddPhones = () => {
    onSavePhones();
  }

  return (
    <div className="modal bg-gray-800 w-[30%] flex flex-col justify-center items-center p-3 rounded-lg z-50">
      <div className="cl w-[100%] flex justify-end">
        <button onClick={handleCloseModal}>
          <BsX className="text-3xl" />
        </button>
      </div>
      <div className="modalContent w-[73%] flex flex-col gap-4">
        <div className="input">
          <PhonesInput onAddPhone={onAddPhone} />
        </div>
        <div className="listPhones">
          <RegisterPhonesList phones={phonesAdd} onDeletePhone={onDeletePhone} />
        </div>
        <div className="buton flex justify-center items-center">
          <button
            className="bg-blue-800 p-1 rounded-lg pl-2 pr-2 hover:bg-blue-900"
            onClick={handleAddPhones}
          >
            Agregar telefonos
          </button>
        </div>
      </div>
    </div>
  );
};

ModalAddPhones.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    onAddPhone: PropTypes.func.isRequired,
    onDeletePhone: PropTypes.func.isRequired,
    phonesAdd: PropTypes.array.isRequired,
    onSavePhones: PropTypes.func.isRequired
}