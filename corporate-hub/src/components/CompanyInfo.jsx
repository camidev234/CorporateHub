import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUserById } from "../services/UserService";
import { getCompanyPhones } from "../services/CompanyPhonesService";
import { getCompanyEmails } from "../services/CompanyEmailsService";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const CompanyInfo = () => {
  const { company_id } = useParams();

  const [companyInfo, setCompanyInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [showComments, setShowComments] = useState(false);

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

  return isLoading ? (
    <section className="w-full h-[50vh] flex justify-center items-center">
      <div className="spinner"></div>
      <div className="mt-20 text-white">
        <span>Cargando informacion...</span>
      </div>
    </section>
  ) : (
    <section className="companyInfo bg-gray-800 w-[95%] rounded-lg h-auto pl-5 pr-5 pb-7 text-white m-auto mt-5 mb-7s">
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
      <article className="comments mt-16 font-bold text-xl">
        <div onMouseDown={() => setShowComments(!showComments)} className="flex justify-between">
          <h1>Ver Comentarios</h1>
          <span>{showComments ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>
        {showComments ? (
          <div>
            <h1>Comentarios</h1>
          </div>
        ) : null}
      </article>
    </section>
  );
};
