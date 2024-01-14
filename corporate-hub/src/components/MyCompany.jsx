import { useContext, useState } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { useEffect } from "react";
import { getCompanyEmails } from "../services/CompanyEmailsService";
import { getCompanyPhones } from "../services/CompanyPhonesService";
import { BsX } from "react-icons/bs";
import { PhonesInput } from "./PhonesInput";
import { RegisterPhonesList } from './RegisterPhonesList'; 
import { savePhones } from "../services/CompanyPhonesService";

export const MyCompany = () => {
  const { userAuth, token } = useContext(GeneralContext);

  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [phonesAdd, setPhonesAdd] = useState([]);

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

  const handleActionClick = () => {
    setModalVisible(true);
  };

  const addPhone = (phone) => {
      setPhonesAdd([...phonesAdd, phone]);
  }

  const deletePhone = (index) => {
    const newPhonesAdd = phonesAdd.filter((phone, i) => i !== index);
    setPhonesAdd(newPhonesAdd);
  }

  const handleAddPhones = async () => {
    try {
      if(phonesAdd.length !== 0) {
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

  return (
    <section className="">
      {isLoading ? (
        <div className="bg-green-500 h-[400px] flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="companyInfo bg-gray-800 w-[95%] rounded-lg h-auto pl-5 pr-5 pb-7 text-white">
          {modalVisible ? (
            <div className="succesContainer fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 bg-black bg-opacity-50 p-4">
              <div className="modal bg-gray-800 w-[30%] flex flex-col justify-center items-center p-3 rounded-lg z-50">
                <div className="cl w-[100%] flex justify-end">
                  <button onClick={() => setModalVisible(false)}>
                    <BsX className="text-3xl" />
                  </button>
                </div>
                <div className="modalContent w-[73%] flex flex-col gap-4">
                  <div className="input">
                    <PhonesInput onAddPhone={addPhone}/>
                  </div>
                  <div className="listPhones">
                    <RegisterPhonesList phones={phonesAdd} onDeletePhone={deletePhone}/>
                  </div>
                  <div className="buton flex justify-center items-center">
                    <button className="bg-blue-800 p-1 rounded-lg pl-2 pr-2 hover:bg-blue-900" onClick={handleAddPhones}>Agregar telefonos</button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <article className="title flex items-center h-28 justify-between">
            <div className="w-[40%]">
              <h1 className="text-2xl">{userAuth.company_name}</h1>
            </div>
            <div className="actions w-[50%] flex justify-around h-[100%] items-center">
              <button
                className="bg-green-500 h-[37px] pl-2 pr-2 rounded-lg hover:bg-green-600"
                onClick={handleActionClick}
              >
                Agregar Telefono
              </button>
              <button className="bg-green-500 h-[37px] pl-2 pr-2 rounded-lg hover:bg-green-600">
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
