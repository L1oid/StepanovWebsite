import React from 'react';

import './style.css';
import {Link} from "react-router-dom";

function HeaderComponent(props) {

    return (
        <div className='header'>
            <div className='page-container'>
                <div className='header-container'>
                    <Link to={"/"} className='header-heading'>Колесников Алексей</Link>
                    <div className='menu-container'>
                        <Link to={"/tables"} className='menu-button'>Таблицы</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;