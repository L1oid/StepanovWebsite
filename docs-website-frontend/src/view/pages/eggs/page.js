import React, {useEffect, useState} from 'react';

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
    const [errorPassword, setErrorPassword] = useState("");
    const [emptyFieldError, setEmptyFieldError] = useState("");


    useEffect(() => {
        setSelect1("Куриные")
        setSelect2("Отборные")
        setDeliveryType("Электронно");
    }, []);

    function sendDataToServer() {

        if (
            !lastName.trim() ||
            !inicial.trim() ||
            !password.trim() ||
            !address.trim() ||
            !count.trim()
        ) {
            setEmptyFieldError("Не все обязательные поля заполнены");
            console.error('Не все обязательные поля заполнены');
            return;
        } else {
            setEmptyFieldError("");
        }

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
                    console.log('Данные успешно отправлены');
                } else if (response.status === 401) {
                    setErrorPassword('Неверный пароль');
                    return Promise.reject('Неверный пароль');
                } else {
                    console.error('Не удалось отправить данные');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                // Показать сообщение об ошибке пользователю
            });
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

    function handlePasswordChange(value) {
        setErrorPassword(""); // Сбрасываем сообщение об ошибке при изменении пароля
        setPassword(value); // Устанавливаем значение пароля
    }


    return (
        <div className='page-container'>
            <div className='eggs-page-container'>
                <div className="eggs-title">ЗАО Птицефабрица №1</div>
                <div className="password-field">
                    <EnabledInputComponent
                        title={'Фамилия'}
                        value={lastName}
                        handle={setLastName}></EnabledInputComponent>
                    <label className="password-error">*</label>
                </div>
                <div className="password-field">
                    <EnabledInputComponent
                        title={'Инициалы'}
                        value={inicial}
                        handle={setInicial}></EnabledInputComponent>
                    <label className="password-error">*</label>
                </div>
                <div className="password-field">
                    <EnabledInputComponent
                        title={'Пароль'}
                        value={password}
                        handle={handlePasswordChange}></EnabledInputComponent>
                    <label className="password-error">*</label>
                    <label className="password-error">{errorPassword}</label>
                </div>
                <div className="password-field">
                    <EnabledInputComponent
                        title={'Адрес'}
                        value={address}
                        handle={setAddress}></EnabledInputComponent>
                    <label className="password-error">*</label>
                </div>
                <div className="password-field">
                    <EnabledInputComponent
                        title={'Количество'}
                        value={count}
                        handle={setCount}></EnabledInputComponent>
                    <label className="password-error">*</label>
                </div>
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
                    <label className="password-error">{emptyFieldError}</label>
                </div>
            </div>
        </div>
    );
}

export default EggsPage;
