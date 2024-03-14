import React, { useState } from 'react';

import './style.css';

import EnabledInputComponent from '../../components/input/component';
import SelectComponent from "../../components/select/component";
import CheckboxComponent from "../../components/checkbox/component";
import InvoiceCheckboxComponent from "../../components/invoiceCheckbox/component";
import TextareaComponent from "../../components/textarea/component";

function EggsPage() {
    const [lastName, setLastName] = useState('');
    const [inicial, setInicial] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [count, setCount] = useState('');
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const [deliveryType, setDeliveryType] = useState("");
    const [invoice, setInvoice] = useState(false);
    const [additionalInfo, setAdditionalInfo] = useState('');

    function sendDataToServer() {
        const invoiceWord = invoice ? "да" : "нет";
        const countInt = parseInt(count);

        fetch('http://localhost:3001/submit-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lastName,
                inicial,
                password,
                address,
                count: countInt,
                select1,
                select2,
                deliveryType,
                invoice: invoiceWord,
                additionalInfo,
            }),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Data sent successfully');
                } else {
                    console.error('Failed to send data');
                }
            })
            .catch(error => console.error('Error:', error));
    }

    function handleCancel() {
        setLastName('');
        setInicial('');
        setPassword('');
        setAddress('');
        setCount('');
        setSelect1('');
        setSelect2('');
        setDeliveryType('');
        setInvoice(false);
        setAdditionalInfo('');
    }


    return (
        <div className='page-container'>
            <div className='eggs-page-container'>
                <EnabledInputComponent
                    title={'Фамилия'}
                    value={lastName}
                    handle={setLastName}></EnabledInputComponent>
                <EnabledInputComponent
                    title={'Инициалы'}
                    value={inicial}
                    handle={setInicial}></EnabledInputComponent>
                <EnabledInputComponent
                    title={'Пароль'}
                    value={password}
                    handle={setPassword}></EnabledInputComponent>
                <EnabledInputComponent
                    title={'Адрес'}
                    value={address}
                    handle={setAddress}></EnabledInputComponent>
                <EnabledInputComponent
                    title={'Количество'}
                    value={count}
                    handle={setCount}></EnabledInputComponent>
                <SelectComponent
                    title={"Тип"}
                    value={select1}
                    value2={select2}
                    handle={setSelect1}
                    handle2={setSelect2}/>
                <CheckboxComponent
                    title={"Доставка"}
                    value4={deliveryType}
                    handle4={setDeliveryType}/>
                <InvoiceCheckboxComponent
                    title={"Требуется накладная"}
                    value={invoice}
                    handle={setInvoice}/>
                <TextareaComponent
                    title={"Дополнительная информация"}
                    value={additionalInfo}
                    handle={setAdditionalInfo}/>
                <div>
                    <button className="eggs-button" onClick={sendDataToServer}>Заказать</button>
                    <button className="eggs-button" onClick={handleCancel}>Отменить</button>
                </div>
            </div>
        </div>
    );
}

export default EggsPage;
