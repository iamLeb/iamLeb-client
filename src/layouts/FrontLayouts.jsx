import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/frontComponents/Header.jsx";
import Footer from "../components/frontComponents/Footer.jsx";

const FrontLayouts = () => {
    return (
        <div className={'h-screen bg-gradient-to-r from-primary to-primary-dark'}>
            <Header />
               <div className={'pb-9'}></div>
                <Outlet />
            <Footer />
        </div>
    );
};

export default FrontLayouts;