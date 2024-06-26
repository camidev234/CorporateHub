import { createContext, useState } from "react"
import PropTypes from 'prop-types';

export const GeneralContext = createContext();

export const  GeneralContextProvider = (props) => {

    const [ authToken, setAuthToken ] = useState("");
    const [ isAuth, setIsAuth ] = useState(false);

    const [ userAuth, setUserAuth ] = useState({});

    const [ companyName, setCompanyName ] = useState("");

    const [searchResults, setSearchResults] = useState([]);

    const login = (token) => {
        setAuthToken(token);
        setIsAuth(true);
    };

    const logout = () => {
        setAuthToken("");
        setIsAuth(false);
    };

    const getCompanyName = (company) => {
        setCompanyName(company);
    }

    const getUserAuthInfo = (user) => {
        setUserAuth(user);
    };

    const updateCompaniesFind = (companies) => {
        setSearchResults(companies);
    };

    return (
        <GeneralContext.Provider 
            value={{
                token: authToken,
                onLogin: login,
                onLogout: logout,
                isAuth: isAuth,
                onGetCompanyName: getCompanyName,
                companyName,
                onGetUserAuthInfo: getUserAuthInfo,
                userAuth,
                searchResults,
                updateCompaniesFind
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    )
}

GeneralContextProvider.propTypes = {
    children: PropTypes.node
}