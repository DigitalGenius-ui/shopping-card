import React, { createContext, useReducer, useContext } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({children, reducer, initialState}) => (
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
            {children}
    </GlobalContext.Provider>
)

export const useGlobalContext = () => useContext(GlobalContext);