import React from 'react';
import "./style.css"

function CheckboxComponent(props) {
    const handleCheckboxChange = (e, type) => {
        if (e.target.checked) {
            props.handle4(type);
        }
    };

    return (
        <div className="organization-info-content">
            <div className="content-text">
                <span>{props.title}</span>
            </div>
            <div className='checkbox-container'>
                <input
                    className="checkbox-input-item"
                    type='checkbox'
                    id='deliveryByMail'
                    checked={props.value4 === "Почтой"}
                    onChange={(e) => handleCheckboxChange(e, "Почтой")}
                />
                <label className="checkbox-text-item" htmlFor='deliveryByMail'>Почтой</label>
            </div>
            <div className='checkbox-container'>
                <input
                    className="checkbox-input-item"
                    type='checkbox'
                    id='deliveryByElectronic'
                    checked={props.value4 === "Электронно"}
                    onChange={(e) => handleCheckboxChange(e, "Электронно")}
                />
                <label className="checkbox-text-item" htmlFor='deliveryByElectronic'>Электронно</label>
            </div>
            <div className='checkbox-container'>
                <input
                    className="checkbox-input-item"
                    type='checkbox'
                    id='deliveryByCourier'
                    checked={props.value4 === "Курьером"}
                    onChange={(e) => handleCheckboxChange(e, "Курьером")}
                />
                <label className="checkbox-text-item" htmlFor='deliveryByCourier'>Курьером</label>
            </div>
        </div>
    )
}

export default CheckboxComponent;
