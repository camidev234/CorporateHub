import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { findUser } from "../services/UserService";
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {

  const { updateCompaniesFind } = useContext(GeneralContext);

  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!searchValue.length == 0) {
        const response = await findUser(searchValue);
        if (response.status === 200) {
          updateCompaniesFind(response.data.companies);
          navigate('/company-list');
        }
      }
    } catch (error) {
      alert('No se encontraron empresas');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <article className="findBa w-[100%] flex justify-center items-center h-[50%]">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-[100%] gap-5 h-[87%]"
      >
        <input
          type="search"
          placeholder="Busca por nombre de la empresa"
          className="w-[80%] h-[100%] rounded-lg bg-transparent border border-solid border-#eee pl-2 text-white
          focus:outline-none border-gray-300 hover:border-blue-400"
          onChange={handleChange}
        />
        <button onClick={handleSearch}>
          <BsSearch className="text-white" />
        </button>
      </form>
    </article>
  );
};
