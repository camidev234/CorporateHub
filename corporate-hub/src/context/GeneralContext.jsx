import { createContext } from "react"
import PropTypes from 'prop-types';

export const GeneralContext = createContext();

export const  GeneralContextProvider = (props) => {

    return (
        <GeneralContext.Provider 
        >
            {props.children}
        </GeneralContext.Provider>
    )
}

GeneralContextProvider.propTypes = {
    children: PropTypes.node
}