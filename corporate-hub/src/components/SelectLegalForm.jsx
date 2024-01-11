import { fetchAll as getAllLF } from "../services/LegalFormService";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export const SelectLegalForm = ({ onSelectForm }) => {
  const [legal_forms, setLegalForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const responseLegalForms = await getAllLF();
        setLegalForms(responseLegalForms);
      } catch (error) {
        setIsLoading(true);
        navigate('/error500');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [navigate]);

  const handleSelect = (e) => {
    const selectedFormId = e.target.value;
    onSelectForm(selectedFormId);

  } 

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinnerCont w-full h-[2.3em] flex items-center">
          <div className="spinner"></div>
          <h1 className="text-white ml-11">Forma Juridica</h1>
        </div>
      ) : (
        <select
          name="legal_form"
          className="h-[2.3em] bg-transparent text-white focus:bg-gray-800 outline-none w-full"
          onChange={handleSelect}
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

SelectLegalForm.propTypes = {
    onSelectForm: PropTypes.func.isRequired
}
