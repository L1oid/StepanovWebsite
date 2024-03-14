import React, { useState } from 'react';
import './style.css';

function MainPage() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className='page-container'>
            <div className="main-page-container">
                <div>
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                    <img
                        src="http://localhost:3000/photo1.jpg"
                        alt="me"
                        onClick={handleClick}
                    />
                </div>
                <div className="info-container">
                    <p className="info-text">Почтовый адрес: <a
                        href={"mailto:lloidtm@gmail.com"}>lloidtm@gmail.com</a>
                    </p>
                    <p className="info-text">Сайт вуза: <a href={"https://kemsu.ru"}>kemsu.ru</a></p>
                    <p className="info-text">Моя группа: МОА-205</p>
                    <p className="info-text">Моя будущая профессия: Front-end разработчик</p>
                    <p className="info-text">Моё хобби: World of Warcraft</p>
                    <p className="other-info-text">Дополнительная информация: Наиграл на друиде в World of Warcraft
                        Classic - 2500 часов</p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
