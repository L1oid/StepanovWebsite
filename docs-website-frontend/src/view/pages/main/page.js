import React, { useState } from 'react';
import './style.css';

function FullScreenImage({ imageUrl, onClose }) {
    return (
        <div className="full-screen-container" onClick={onClose}>
            <img src={imageUrl} alt="full screen" className="full-screen-image" />
        </div>
    );
}

function MainPage() {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedImageUrl, setClickedImageUrl] = useState('');

    const handleClick = (imageUrl) => {
        setClickedImageUrl(imageUrl);
        setIsClicked(true);
    };

    const handleCloseFullScreen = () => {
        setIsClicked(false);
    };

    const photos = [
        { url: "http://localhost:3000/photo1.jpg" },
        { url: "http://localhost:3000/photo1.jpg" },
        { url: "http://localhost:3000/photo1.jpg" },
        { url: "http://localhost:3000/photo1.jpg" },
        { url: "http://localhost:3000/photo1.jpg" },
        { url: "http://localhost:3000/photo1.jpg" },
        { url: "http://localhost:3000/photo1.jpg" },
        { url: "http://localhost:3000/photo1.jpg" },
    ];

    return (
        <div className='page-container'>
            <div className="main-page-container">
                <div>
                    {photos.map((photo, photoIndex) => (
                        <img
                            key={photoIndex}
                            src={photo.url}
                            alt="me"
                            onClick={() => handleClick(photo.url)}
                            className="thumbnail-image"
                        />
                    ))}
                </div>
                <div className="info-container">
                    <p className="info-text">Почтовый адрес: <a href={"mailto:lloidtm@gmail.com"}>lloidtm@gmail.com</a></p>
                    <p className="info-text">Сайт вуза: <a href={"https://kemsu.ru"}>kemsu.ru</a></p>
                    <p className="info-text">Моя группа: МОА-205</p>
                    <p className="info-text">Моя будущая профессия: Front-end разработчик</p>
                    <p className="info-text">Моё хобби: World of Warcraft</p>
                    <p className="other-info-text">Дополнительная информация: Наиграл на друиде в World of Warcraft Classic - 2500 часов</p>
                </div>
            </div>
            {isClicked && <FullScreenImage imageUrl={clickedImageUrl} onClose={handleCloseFullScreen} />}
        </div>
    );
}

export default MainPage;
