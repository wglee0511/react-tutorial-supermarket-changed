import React,{createContext, useState, useEffect} from "react";

export const AppContext = createContext();

export function AppProvider (props) {

    const handleProductAdd = (product) =>{
        console.log("Add");
        console.log(product);

    }
    const handleProductDelete = (id) =>{
        console.log("Del");
        console.log(id);
    }

    const value = {
        handleProductAdd,
        handleProductDelete
    };
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}