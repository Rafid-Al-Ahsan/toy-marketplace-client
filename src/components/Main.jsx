import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
<html data-theme="cupcake"></html>


const Main = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;