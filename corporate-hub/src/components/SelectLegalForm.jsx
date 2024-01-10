import { fetchAll as getAllLF } from "../services/LegalFormService";
import { useEffect, useState } from "react";

export const SelectLegalForm = () => {
  const [legal_forms, setLegalForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseLegalForms = await getAllLF();
        setLegalForms(responseLegalForms);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinnerCont w-full h-[2.3em] flex items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <select
          name="legal_form"
          className="h-[2.3em] bg-transparent text-white focus:bg-gray-800 outline-none w-full"
        >
          {legal_forms.map((lf) => {
            return (
              <option value={lf.id} key={lf.id}>
                {lf.legal_form}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};
