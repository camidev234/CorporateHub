import { BsX } from "react-icons/bs";
import PropTypes from 'prop-types';
import { EmailsInput } from './EmailsInput';
import { RegisterEmailsList } from './RegisterEmailsList';

export const ModalAddEmails = ({ onAddEmail, onDeleteEmail, onSaveEmails, emailsAdd, onCloseModal }) => {

  const handleCloseModal = () => {
    onCloseModal();
  };

  const handleAddEmails = () => {
    onSaveEmails();
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
          <EmailsInput onAddEmail={onAddEmail} />
        </div>
        <div className="listPhones">
          <RegisterEmailsList
            emails={emailsAdd}
            onDeleteEmail={onDeleteEmail}
          />
        </div>
        <div className="buton flex justify-center items-center">
          <button
            className="bg-blue-800 p-1 rounded-lg pl-2 pr-2 hover:bg-blue-900"
            onClick={handleAddEmails}
          >
            Agregar Emails
          </button>
        </div>
      </div>
    </div>
  );
};

ModalAddEmails.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    onAddEmail: PropTypes.func.isRequired,
    onDeleteEmail: PropTypes.func.isRequired,
    emailsAdd: PropTypes.array.isRequired,
    onSaveEmails: PropTypes.func.isRequired
}
