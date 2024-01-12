import { createContext, useState } from "react"
import PropTypes from 'prop-types';

export const GeneralContext = createContext();

export const  GeneralContextProvider = (props) => {

    const [ authToken, setAuthToken ] = useState("");

    const updateToken = (token) => {
        setAuthToken(token);
    };

    const logout = () => {
        setAuthToken("");
    };

    return (
        <GeneralContext.Provider 
            value={{
                token: authToken,
                onUpdateToken: updateToken,
                onLogout: logout
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    )
}

GeneralContextProvider.propTypes = {
    children: PropTypes.node
}