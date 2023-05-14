import React from "react";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const DefaultLayout = () => {

    const {user, token} = useStateContext();

    return (
        <>
            <Outlet/>    
        </>
    );
};

export default DefaultLayout;
