import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import PropTypes from 'prop-types';

const initialState = {
    isSidebarOpen: false
}

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" })
    }
    return (
        <SidebarContext.Provider value = {{
            ...state,
            toggleSidebar
        }}>
            { children }
        </SidebarContext.Provider>
    )
}

SidebarProvider.propTypes = {
    children: PropTypes.node
}