import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
    return ( 
        <>
            <p>Guest User Only</p>
            <Outlet/>  
        </>
    );
}

export default GuestLayout;