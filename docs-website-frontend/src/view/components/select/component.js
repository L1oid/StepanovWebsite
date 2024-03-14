import React from 'react';

import "./style.css"

function SelectComponent(props) {
    return (
        <div className="organization-info-content">
            <div className="content-text">
                <span>
                    {props.title}
                </span>
            </div>
            <div className='select-container'>
                <select
                    className="select-item"
                    id='select1'
                    value={props.value}
                    onChange={(e) => props.handle(e.target.value)}>
                    <option value='Куриные'>Куриные</option>
                    <option value='Страусиные'>Страусиные</option>
                    <option value='Крокодильи'>Крокодильи</option>
                </select>
            </div>
            <div className='select-container'>
                <select
                    className="select-item"
                    id='select2'
                    value={props.value2}
                    onChange={(e) => props.handle2(e.target.value)}>
                    <option value='Отборные'>Отборные</option>
                    <option value='Не отборные'>Не отборные</option>
                    <option value='Чуть чуть отборные'>Чуть чуть отборные</option>
                </select>
            </div>
        </div>
    )
}

export default SelectComponent;