import "./footer.scss"

import React from 'react';
import Logo from "../logo/Logo"
import InfoPanelLower from "../info-panel/info-panel-lower/InfoPanelLower";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__logo"><Logo /></div>
            <div className="footer__descr">
                <p>ПРИНТ И ВЫШИВКА НА ОДЕЖДЕ Бишкек </p>
                <p>Товар/услуга</p>
                <p>Твоя брендированная одежда </p>
                <p>Мы создадим ваш индивидуальный дизайн Изготовим за 2-3 дня</p>
                <p>Оптом и в Розницу </p>
                <p>ПЕРЕХОДИ ПО ССЫЛКЕ wa.me/996990262226v</p>
            </div>
            <div className="footer__info-panel">
                <InfoPanelLower />
            </div>
        </div>
    );
};

export default Footer;