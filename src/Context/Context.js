import React from "react";

export const Context = React.createContext();

export const ContextProvider = (props) => {

    let [data, setData] = React.useState({
        portugal: [],
        nicaragua: [],
        marshall: []
    });






    return (
        <Context.Provider value={[data, setData]}>
            {props.children}
        </Context.Provider>
    )
}