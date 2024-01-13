import { createContext, useState } from "react"
import PropTypes from 'prop-types';

export const GeneralContext = createContext();

export const  GeneralContextProvider = (props) => {

    const [ authToken, setAuthToken ] = useState("");
    const [ isAuth, setIsAuth ] = useState(false);

    const login = (token) => {
        setAuthToken(token);
        setIsAuth(true);
    };

    const logout = () => {
        setAuthToken("");
    };

    return (
        <GeneralContext.Provider 
            value={{
                token: authToken,
                onLogin: login,
                onLogout: logout,
                isAuth
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    )
}

GeneralContextProvider.propTypes = {
    children: PropTypes.node
}