import { BsBookmarkCheckFill } from "react-icons/bs";

export const SuccesAlert = () => {
  return (
    <div className="succesContainer fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="spinnerCont rounded-2xl flex flex-col items-center bg-gray-700 w-[300px] h-[250px] justify-center">
        <BsBookmarkCheckFill style={{fontSize: '44px', color: 'green'}}/>
        <h1 className="text-white mt-4">Empresa registrada con exito</h1>
      </div>
    </div>
  );
};
