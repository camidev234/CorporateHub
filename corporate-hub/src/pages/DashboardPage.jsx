import { ActualPage } from "../components/ActualPage";
import { DashboardNav } from "../components/DashboardNav";
import { DashboardContextProvider } from "../context/DashboardContext";
import { GeneralContext } from "../context/GeneralContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export const DashboardPage = () => {
  const { companyName } = useContext(GeneralContext);
  const location = useLocation();

  return (
    <DashboardContextProvider>
      <section className="sideba w-[23%] max-h-[87vh]  border-r border-solid border-gray-500">
        <DashboardNav companyName={companyName} />
      </section>
      <section className="actualPage w-[100%] p-12 h-[87vh]" style={{overflow: 'auto'}}>
        <ActualPage pathName={location.pathname}/>
      </section>
    </DashboardContextProvider>
  );
};
