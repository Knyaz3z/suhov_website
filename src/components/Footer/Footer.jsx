import './Footer.scss';
import { FaPhone, FaEnvelope, FaGlobe, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__quote">
                    <p>Время уходит. Но остаётся то, как мы его провели.</p>
                </div>

                <div className="footer__content">
                    <div className="footer__contacts">
                        <h3 className="footer__title">Контакты</h3>
                        <a href="tel:+79957873116" className="footer__contact-item">
                            <FaPhone className="footer__contact-icon footer__contact-icon--phone" />
                            <span>+7 (995) 787 3116</span>
                        </a>
                        <a href="mailto:suhov.vedet@gmail.com" className="footer__contact-item">
                            <FaEnvelope className="footer__contact-icon footer__contact-icon--email" />
                            <span>suhov.vedet@gmail.com</span>
                        </a>
                        <div className="footer__contact-item">
                            <FaGlobe className="footer__contact-icon footer__contact-icon--globe" />
                            <span>Москва и по всему миру</span>
                        </div>
                    </div>

                    <div className="footer__social">
                        <h3 className="footer__title">Социальные сети</h3>
                        <div className="footer__social-icons">
                            <a href="https://t.me/suhov_vedet" className="footer__social-link" aria-label="Telegram">
                                <FaTelegram className="footer__social-icon" />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=79957873116&text=Добрый%20день%2C%20я%20по%20поводу%20организации%20мероприятия." className="footer__social-link" aria-label="WhatsApp">
                                <FaWhatsapp className="footer__social-icon" />
                            </a>
                            <a href="https://www.instagram.com/suhov_vedet/" className="footer__social-link" aria-label="Instagram">
                                <FaInstagram className="footer__social-icon" />
                            </a>
                        </div>
                    </div>

                    <nav className="footer__navigation">
                        <h3 className="footer__title">Навигация</h3>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item"><a href="#about" className="footer__nav-link">Обо мне</a></li>
                            <li className="footer__nav-item"><a href="#galery" className="footer__nav-link">Галерея</a></li>
                            <li className="footer__nav-item"><a href="#number" className="footer__nav-link">Я в цифрах</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__copyright">
                    <p>© 2024 Сайт создан с вниманием к деталям. Designed by Maxim Knyaz</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;