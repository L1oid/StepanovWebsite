import React from 'react';

import "./style.css"

function TextareaComponent(props) {
    return (
        <div className="organization-info-content">
            <div className="content-text">
                <span>
                    {props.title}
                </span>
            </div>
            <div className="input-container">
                <textarea
                    className={"textarea"}
                    id="additional-info"
                    value={props.value}
                    onChange={(e) => props.handle(e.target.value)}
                    rows={4} // Установите количество строк, которые вы хотите отобразить изначально
                />
            </div>
        </div>
    )
}

export default TextareaComponent;