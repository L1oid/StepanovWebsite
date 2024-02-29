import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "../../components/layout/header/component";

function Layout() {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

export default Layout;