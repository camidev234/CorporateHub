import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

export const MyCompany = () => {
  const { userAuth } = useContext(GeneralContext);

  return (
    <section className="companyInfo bg-gray-800 w-[95%] rounded-lg h-auto pl-5 pr-5 pb-7 text-white">
      <article className="title flex items-center h-28">
        <h1 className="text-2xl">{userAuth.company_name}</h1>
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
  );
};
