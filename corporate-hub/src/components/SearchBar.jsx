import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
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
          type="text"
          placeholder="Busca por nombre de la empresa"
          className="w-[80%] h-[100%] rounded-lg bg-transparent border border-solid border-#eee pl-2 text-white
          focus:outline-none border-gray-300 hover:border-blue-400"
        />
        <button>
          <BsSearch className="text-white" />
        </button>
      </form>
    </article>
  );
};