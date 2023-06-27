import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';


const Layout = () => {


    return (
        <div className={'layout'}>
            <h1>test task for PortaOne Education</h1>

            <div className={'outlet'}><Outlet/></div>
        </div>
    );
};

export default Layout;