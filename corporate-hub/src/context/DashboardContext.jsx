import { createContext } from "react";
import PropTypes from "prop-types";

const DashboardContext = createContext();

export const DashboardContextProvider = (props) => {
  return (
    <DashboardContext.Provider>
      <div className="flex w-screen">{props.children}</div>
    </DashboardContext.Provider>
  );
};

DashboardContextProvider.propTypes = {
  children: PropTypes.node,
};
