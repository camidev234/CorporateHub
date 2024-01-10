import { useEffect, useState } from "react";
import { PhonesInput } from "./PhonesInput";
import { RegisterPhonesList } from "./RegisterPhonesList";
import { EmailsInput } from "./EmailsInput";
import { RegisterEmailsList } from "./RegisterEmailsList";
import { fetchAll as getallC } from "../services/CountryService";
import { fetchAll as getAllLF } from "../services/LegalFormService";


export const RegisterUser = () => {
  const [countries, setCountries] = useState([]);
  const [legal_forms, setLegalForms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseCountries = await getallC();
      setCountries(responseCountries);
      const responseLegalForms = await getAllLF();
      setLegalForms(responseLegalForms);

    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);

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

  return (
    <section className="registerUser w-full h-auto flex justify-center items-center mb-20">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-gray-800 w-[30%] flex flex-col gap-3 p-8 rounded-lg"
      >
        <input
          type="text"
          name="company"
          placeholder="Empresa"
          className="h-[2.3em]s bg-transparent border-b border-solid border-gray-500 pb-2 outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <input
          type="text"
          placeholder="Nit"
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2
          outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <input
          type="text"
          placeholder="Direccion"
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2 
          outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <select
          name="country"
          className="h-[2.3em] bg-transparent text-white focus:bg-gray-800 outline-none"
        >
          {countries.map((country) => (
            <option value={country.id} key={country.id}>
              {country.country_name}
            </option>
          ))}
        </select>
        <textarea
          cols="30"
          rows="10"
          placeholder="Resumen de la empresa"
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2 outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        ></textarea>
        <input
          type="text"
          placeholder="Actividad principal"
          className=" h-[2.3em] bg-transparent border-b border-solid border-gray-500 pb-2 
          outline-none
          text-white focus:border-b focus:border-solid focus:border-white"
        />
        <select
          name="legal_form"
          className="h-[2.3em] bg-transparent text-white focus:bg-gray-800 outline-none"
        >
          {
            legal_forms.map((lf) => {
              return (
                <option value={lf.id} key={lf.id}>{lf.legal_form}</option>
              )
            })
          }
        </select>
        <input
          type="password"
          placeholder="Contraseña"
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
        <button className="bg-blue-500 rounded-lg h-[2em] text-white hover:bg-orange-500 mt-4">
          Registrar Empresa
        </button>
      </form>
    </section>
  );
};
