import { useContext, useState } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { useEffect } from "react";
import { getCompanyEmails, saveEmails } from "../services/CompanyEmailsService";
import { getCompanyPhones } from "../services/CompanyPhonesService";
import { BsX } from "react-icons/bs";
import { savePhones } from "../services/CompanyPhonesService";
import { ModalAddPhones } from "./ModalAddPhones";
import { ModalAddEmails } from "./ModalAddEmails";

export const MyCompany = () => {
  const { userAuth, token } = useContext(GeneralContext);

  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(0);
  const [phonesAdd, setPhonesAdd] = useState([]);
  const [emailsAdd, setEmailsAdd] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const responseEmails = await getCompanyEmails(token, userAuth.id);
      setEmails(responseEmails);
      const responsePhones = await getCompanyPhones(token, userAuth.id);
      console.log(responsePhones);
      setPhones(responsePhones);
      setIsLoading(false);
    };

    getData();
  }, [token, userAuth]);

  const openModal = (state) => {
    setModalVisible(true);
    setModalOpen(state);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalOpen(0);
  };

  const addPhone = (phone) => {
    setPhonesAdd([...phonesAdd, phone]);
  };

  const deletePhoneAdd = (index) => {
    const newPhonesAdd = phonesAdd.filter((phone, i) => i !== index);
    setPhonesAdd(newPhonesAdd);
  };

  const addEmail = (email) => {
    setEmailsAdd([...emailsAdd, email]);
  };

  const deleteEmailAdd = (index) => {
    const newEmailsAdd = emailsAdd.filter((email, i) => i !== index);
    setEmailsAdd(newEmailsAdd);
  };

  const handleAddPhones = async () => {
    try {
      if (phonesAdd.length !== 0) {
        setModalVisible(false);
        await savePhones(phonesAdd, userAuth.id);
        setPhonesAdd([]);
        setIsLoading(true);
        const responsePhones = await getCompanyPhones(token, userAuth.id);
        setPhones(responsePhones);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddEmails = async() => {
    try {
      if(emailsAdd.length !== 0) {
        setModalVisible(false);
        await saveEmails(emailsAdd, userAuth.id);
        setEmailsAdd([]);
        setIsLoading(true);
        const responseEmails = await getCompanyEmails(token, userAuth.id);
        setEmails(responseEmails);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="">
      {isLoading ? (
        <div className="bg-green-500 h-[400px] flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="companyInfo bg-gray-800 w-[95%] rounded-lg h-auto pl-5 pr-5 pb-7 text-white">
          {modalVisible && modalOpen == 0 ? (
            <div className="succesContainer fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 bg-black bg-opacity-50 p-4">
              <ModalAddPhones
                onCloseModal={closeModal}
                onAddPhone={addPhone}
                onDeletePhone={deletePhoneAdd}
                phonesAdd={phonesAdd}
                onSavePhones={handleAddPhones}
              />
            </div>
          ) : modalVisible && modalOpen == 1 ? (
            <div className="succesContainer fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 bg-black bg-opacity-50 p-4">
              <ModalAddEmails
                onCloseModal={closeModal}
                onAddEmail={addEmail}
                onDeleteEmail={deleteEmailAdd}
                emailsAdd={emailsAdd}
                onSaveEmails={handleAddEmails}
              />
            </div>
          ) : null}

          <article className="title flex items-center h-28 justify-between">
            <div className="w-[40%]">
              <h1 className="text-2xl">{userAuth.company_name}</h1>
            </div>
            <div className="actions w-[50%] flex justify-around h-[100%] items-center">
              <button
                className="bg-green-500 h-[37px] pl-2 pr-2 rounded-lg hover:bg-green-600"
                onClick={() => {
                  openModal(0);
                }}
              >
                Agregar Telefono
              </button>
              <button
                className="bg-green-500 h-[37px] pl-2 pr-2 rounded-lg hover:bg-green-600"
                onClick={() => {
                  openModal(1);
                }}
              >
                Agregar Correo electronico
              </button>
            </div>
          </article>
          <article className="info flex flex-col w-[100%] gap-5">
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Razon Social</h1>
              </div>
              <div className="value w-[80%]">
                <h2>{userAuth.company_name}</h2>
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Pais</h1>
              </div>
              <div className="value w-[80%]">
                <h2>{userAuth.country.country_name}</h2>
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Direccion</h1>
              </div>
              <div className="value w-[80%]">
                <h2>{userAuth.address}</h2>
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Telefonos</h1>
              </div>
              <div className="value w-[80%] flex flex-col gap-2 items-start">
                {phones.map((phone) => {
                  return (
                    <div
                      className="gap-2 bg-gray-700 p-1 flex rounded-lg"
                      key={phone.phone.id}
                    >
                      <h2>{phone.phone}</h2>
                      <button className="bg-gray-600 rounded-full">
                        <BsX />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Correo Electronico</h1>
              </div>
              <div className="value w-[80%] flex flex-col gap-2 items-start">
                {emails.map((email) => {
                  return (
                    <div
                      className="gap-2  p-1 flex rounded-lg hover:bg-gray-700 hover:cursor-pointer"
                      key={email.email.id}
                    >
                      <h2>{email.email}</h2>
                      <button className=" rounded-full">
                        <BsX className="text-red-500" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Nit</h1>
              </div>
              <div className="value w-[80%]">
                <h2>{userAuth.company_nit}</h2>
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Actividad Principal</h1>
              </div>
              <div className="value w-[80%]">
                <h2>{userAuth.principal_activity}</h2>
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-600 pb-3">
              <div className="key w-[20%]">
                <h1 className="font-bold">Forma Juridica</h1>
              </div>
              <div className="value w-[80%]">
                <h2>{userAuth.legal_form.legal_form}</h2>
              </div>
            </div>
            <div className="flex">
              <div className="key w-[20%]">
                <h1 className="font-bold">Acerca De</h1>
              </div>
              <div className="value w-[80%]">
                <h2>{userAuth.description}</h2>
              </div>
            </div>
          </article>
        </section>
      )}
    </section>
  );
};
