import React from 'react';

import "./style.css"

function InvoiceCheckboxComponent(props) {
    return (
        <div className="organization-info-content">
            <div className="content-text">
                <span>
                    {props.title}
                </span>
            </div>
            <div className='checkbox-container'>
                <input
                    type='checkbox'
                    id='invoice'
                    checked={props.value}
                    onChange={(e) => props.handle(e.target.checked)}
                />
            </div>
        </div>
    )
}

export default InvoiceCheckboxComponent;