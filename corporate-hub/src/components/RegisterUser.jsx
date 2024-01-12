import { useState } from "react";
import { PhonesInput } from "./PhonesInput";
import { RegisterPhonesList } from "./RegisterPhonesList";
import { EmailsInput } from "./EmailsInput";
import { RegisterEmailsList } from "./RegisterEmailsList";
import { SelectCountry } from "./SelectCountry";
import { SelectLegalForm } from "./SelectLegalForm";
import { createUser } from "../services/UserService";
import { SavingAlert } from "./SavingAlert";
import { SuccesAlert } from "./SuccesAlert";
import { useNavigate } from 'react-router-dom'
import { saveEmails } from "../services/CompanyEmailsService";
import { savePhones } from "../services/CompanyPhonesService";

export const RegisterUser = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [send, setSend] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [user, setUser] = useState({
    company_name: "",
    company_nit: "",
    address: "",
    country_id: 1,
    description: "",
    principal_activity: "",
    legal_form_id: 1,
    password: "",
  });

  const saveUser = async () => {
    try {
      setSend(true);
      const response = await createUser(user);
      setSend(false);
      if(response.status == 201){
        setIsSaved(true);
        if(emails.length !== 0){
          await saveEmails(emails, response.data.data.user.id);
        }
        if(phones.length !== 0){
          await savePhones(phones, response.data.data.user.id);
        }
        setTimeout(() => {
          setIsSaved(false);
          navigate('/');
        }, 1500)
      } else {
        setIsSaved(false);
      }
    } catch (error) {
        alert('Internal server error');
    } 
  }

  const handlePhoneClick = (phone) => {
    setPhones([...phones, phone]);
  };

  const handleEmailClick = (email) => {
    setEmails([...emails, email]);
  };

  const deletePhone = (index) => {
    const newPhones = phones.filter((phone, position) => position !== index);
    setPhones(newPhones);
  };

  const deleteEmail = (index) => {
    const newEmails = emails.filter((email, position) => position !== index);
    setEmails(newEmails);
  };

  const handleNameChange = (e) => {
    setUser({ ...user, company_name: e.target.value });
  };

  const handleNitChange = (e) => {
    setUser({ ...user, company_nit: e.target.value });
  };

  const handleAddressChange = (e) => {
    setUser({ ...user, address: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setUser({ ...user, description: e.target.value });
  };

  const handleActivityChange = (e) => {
    setUser({ ...user, principal_activity: e.target.value });
  };

  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSelectCountry = (selectedCountryId) => {
    setUser({ ...user, country_id: parseInt(selectedCountryId) });
  };

  const handleSelectForm = (selectedFormId) => {
    setUser({ ...user, legal_form_id: parseInt(selectedFormId) });
  };

  return (
    <section className="registerUser w-full h-auto flex justify-center items-center mb-20 z-10">
      {
        send ? <SavingAlert isSend={send}/> : null
      }
      {
        isSaved ? <SuccesAlert/> : null
      }
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-gray-800 w-[30%] flex flex-col gap-3 p-8 rounded-lg"
      >
        <input
          type="text"
          name="company"
          onChange={handleNameChange}
          value={user.company_name}
          placeholder="Empresa"
          className="h-[2.3em]s bg-transparent border-b border-solid border-gray-500 pb-2 outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <input
          type="text"
          placeholder="Nit"
          value={user.company_nit}
          onChange={handleNitChange}
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2
          outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <input
          type="text"
          placeholder="Direccion"
          onChange={handleAddressChange}
          value={user.address}
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2 
          outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <div className="select-country">
          <SelectCountry onSelectCountry={handleSelectCountry} />
        </div>
        <textarea
          cols="30"
          rows="10"
          onChange={handleDescriptionChange}
          value={user.description}
          placeholder="Resumen de la empresa"
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2 outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        ></textarea>
        <input
          type="text"
          placeholder="Actividad principal"
          onChange={handleActivityChange}
          value={user.principal_activity}
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2 
          outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <div className="select-legal-form">
          <SelectLegalForm onSelectForm={handleSelectForm}/>
        </div>
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleChangePassword}
          value={user.password}
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2 outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <div className="addPhone">
          <PhonesInput onAddPhone={handlePhoneClick} />
        </div>
        <div className="phonesList">
          <RegisterPhonesList onDeletePhone={deletePhone} phones={phones} />
        </div>
        <div className="addEmail">
          <EmailsInput onAddEmail={handleEmailClick} />
        </div>
        <div className="emailsList">
          <RegisterEmailsList onDeleteEmail={deleteEmail} emails={emails} />
        </div>
        <button className="bg-blue-800 rounded-lg h-[2em] text-white hover:bg-orange-500 mt-4"
        onClick={saveUser}
        >
          Registrar Empresa
        </button>
      </form>
    </section>
  );
};
