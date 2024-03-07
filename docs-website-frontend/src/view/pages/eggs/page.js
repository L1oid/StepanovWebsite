import React, {useState} from 'react';

import './style.css'
import EnabledInputComponent from "../../components/input/component";

function EggsPage() {

    const [lastName, setLastName] = useState("");
    const [inicial, setInicial] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [count, setCount] = useState("");

    return (
        <div className='page-container'>
            <div className='eggs-page-container'>
                <EnabledInputComponent
                    title={"Фамилия"}
                    value={lastName}
                    handle={setLastName}>
                </EnabledInputComponent>
                <EnabledInputComponent
                    title={"Инициалы"}
                    value={inicial}
                    handle={setInicial}>
                </EnabledInputComponent>
                <EnabledInputComponent
                    title={"Пароль"}
                    value={password}
                    handle={setPassword}>
                </EnabledInputComponent>
                <EnabledInputComponent
                    title={"Адрес"}
                    value={address}
                    handle={setAddress}>
                </EnabledInputComponent>
                <EnabledInputComponent
                    title={"Количество"}
                    value={count}
                    handle={setCount}>
                </EnabledInputComponent>
            </div>
        </div>
    )
}

export default EggsPage;