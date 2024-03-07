import React from 'react';

import "./style.css"

function EnabledInputComponent(props) {
    return (
        <div className="organization-info-content">
            <div className="content-text">
                <span>
                    {props.title}
                </span>
            </div>
            <input
                className="content-input"
                value={props.value}
                onChange={(e) => props.handle(e.target.value)}
            />
        </div>
    )
}

export default EnabledInputComponent;