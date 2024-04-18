import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUserById } from "../services/UserService";
import { getCompanyPhones } from "../services/CompanyPhonesService";
import { getCompanyEmails } from "../services/CompanyEmailsService";
import { BsChevronDown, BsChevronUp, BsStar, BsStarFill } from "react-icons/bs";
import { ShowComments } from "./ShowComments";
import { ModalComment } from "./ModalComment";
export const CompanyInfo = () => {
  const { company_id } = useParams();

  const [companyInfo, setCompanyInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    const getCompanyInfo = async () => {
      try {
        setIsLoading(true);
        const response = await findUserById(company_id);
        setCompanyInfo(response.data.userFind.user);
        const responsePhones = await getCompanyPhones(company_id);
        setPhones(responsePhones);
        const responseEmails = await getCompanyEmails(company_id);
        setEmails(responseEmails);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCompanyInfo();
  }, [company_id]);

  const toggleComments = () => {
    setShowComments(!showComments)
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return isLoading ? (
    <section className="w-full h-[50vh] flex justify-center items-center">
      <div className="spinner"></div>
      <div className="mt-20 text-white">
        <span>Cargando informacion...</span>
      </div>
    </section>
  ) : (
    <section className="companyInfo bg-gray-800 w-[62%] mb-6 rounded-lg h-auto pl-5 pr-5 pb-7 text-white m-auto mt-5 mb-7s">
      {
        modalVisible ? (
          <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-950 bg-opacity-50">
            <ModalComment onCloseModal={closeModal}/>
          </section>
        ) : null
      }
      <article className="title flex items-center h-28 justify-between">
        <div className="w-[40%]">
          <h1 className="text-2xl">{companyInfo.company_name}</h1>
        </div>
      </article>
      <article className="info flex flex-col w-[100%] gap-5">
        <div className="flex border-b border-solid border-gray-600 pb-3">
          <div className="key w-[20%]">
            <h1 className="font-bold">Razon Social</h1>
          </div>
          <div className="value w-[80%]">
            <h2>{companyInfo.company_name}</h2>
          </div>
        </div>
        <div className="flex border-b border-solid border-gray-600 pb-3">
          <div className="key w-[20%]">
            <h1 className="font-bold">Pais</h1>
          </div>
          <div className="value w-[80%]">
            <h2>{companyInfo.country.country_name}</h2>
          </div>
        </div>
        <div className="flex border-b border-solid border-gray-600 pb-3">
          <div className="key w-[20%]">
            <h1 className="font-bold">Direccion</h1>
          </div>
          <div className="value w-[80%]">
            <h2>{companyInfo.address}</h2>
          </div>
        </div>
        {phones !== undefined ? (
          <div className="flex border-b border-solid border-gray-600 pb-3">
            <div className="key w-[20%]">
              <h1 className="font-bold">Telefonos</h1>
            </div>
            <div className="value w-[80%] flex flex-col gap-2 items-start">
              {phones.map((phone) => {
                return (
                  <div className="gap-2 p-1 flex rounded-lg" key={phone.id}>
                    <h2>{phone.phone}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {emails !== undefined ? (
          <div className="flex border-b border-solid border-gray-600 pb-3">
            <div className="key w-[20%]">
              <h1 className="font-bold">Correo Electronico</h1>
            </div>
            <div className="value w-[80%] flex flex-col gap-2 items-start">
              {emails.map((email) => {
                return (
                  <div className="gap-2 p-1 flex rounded-lg" key={email.id}>
                    <h2>{email.email}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        <div className="flex border-b border-solid border-gray-600 pb-3">
          <div className="key w-[20%]">
            <h1 className="font-bold">Nit</h1>
          </div>
          <div className="value w-[80%]">
            <h2>{companyInfo.company_nit}</h2>
          </div>
        </div>
        <div className="flex border-b border-solid border-gray-600 pb-3">
          <div className="key w-[20%]">
            <h1 className="font-bold">Actividad Principal</h1>
          </div>
          <div className="value w-[80%]">
            <h2>{companyInfo.principal_activity}</h2>
          </div>
        </div>
        <div className="flex border-b border-solid border-gray-600 pb-3">
          <div className="key w-[20%]">
            <h1 className="font-bold">Forma Juridica</h1>
          </div>
          <div className="value w-[80%]">
            <h2>{companyInfo.legal_form.legal_form}</h2>
          </div>
        </div>
        <div className="flex">
          <div className="key w-[20%]">
            <h1 className="font-bold">Acerca De</h1>
          </div>
          <div className="value w-[80%]">
            <p>{companyInfo.description}</p>
          </div>
        </div>
      </article>
      <article className="comments mt-16 text-xl">
        <div
          onMouseDown={toggleComments}
          className="flex justify-between"
        >
          <h1 className="font-bold">Ver Comentarios</h1>
          <span>{showComments ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>
        {showComments ? (
          <div className="mt-4">
            <div className="flex justify-between">
              <div className="cont flex gap-3">
                <span className="flex justify-center items-center">
                  <h1>Comentarios</h1>
                </span>
                <span className="flex justify-center items-center gap-1">
                  {companyInfo.score}
                  {stars.map((star, index) => {
                    if (star <= companyInfo.score) {
                      return (
                        <BsStarFill
                          key={index}
                          className="text-yellow-500 text-xs"
                        />
                      );
                    } else {
                      return <BsStar key={index} className=" text-md" />;
                    }
                  })}
                </span>
              </div>
              <button className="bg-blue-600 rounded-md pt-1 pb-2 pl-3 pr-3" onClick={handleModal}>
                Agregar Reseña
              </button>
            </div>
            <div className="comments bg-green-800">
                <ShowComments company_id={companyInfo.id}/>
            </div>
          </div>
        ) : null}
      </article>
    </section>
  );
};
