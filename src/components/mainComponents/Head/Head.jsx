import React, {useEffect, useState} from 'react';
import './Head.scss';
import {motion} from "motion/react";
import {FaPhone} from "react-icons/fa";

function Head() {

    const [isMeroVisible, setIsMeroVisible] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [opacityPhone, setOpacityPhone] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 300;
            setIsScrolled(scrolled);

            // Всегда обновляем opacity в зависимости от скролла
            setOpacityPhone(scrolled ? 0.5 : 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = () => {
        // Только если проскролили, меняем opacity при наведении
        if (isScrolled) {
            setOpacityPhone(1);
        }
    };

    const handleMouseLeave = () => {
        // Только если проскролили, возвращаем opacity 0.5
        if (isScrolled) {
            setOpacityPhone(0.5);
        }
    };

    function meroVisible() {
        setIsMeroVisible(true);
    }

    function meroHidden() {
        setIsMeroVisible(false);
    }

    return (
        <div className="main__head">
            <a
                href="tel:+79957873116"
                className="main__contact-item"
                style={{opacity: opacityPhone}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <FaPhone className="main__contact-icon main__contact-icon--phone"/>
                <span>+7 (995) 787 3116</span>
            </a>
            {/* Фоновые SVG волны */}
            <svg className="main__head-wave top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 510" fill="none">
                <path
                    d="M796 5.3272C480 -33.8728 -86.1667 152.5 -178 262L-230 509.827H2266.5C2338.17 394.494 2167.7 62.2006 1936.5 81.0006C1647.5 104.501 1727 492.327 1418 437.327C1109 382.327 1191 54.3272 796 5.3272Z"
                    fill="#8E2C05" fillOpacity="0.1"/>
            </svg>

            {/* Разбросанные фотографии */}
            <motion.img
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, rotate:5}}
                transition={{delay: 0, duration: 0.3}}
                viewport={{once: true}}
                src="/head_photo_1.webp"
                alt="Сухов Анатлий — профессиональный ведущий мероприятий"
                className="main__head-photo photo-1"/>
            <motion.img
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, rotate:5}}
                transition={{delay: 0, duration: 0.5}}
                viewport={{once: true}}
                src="/head_photo_2.webp"
                alt="Сухов Анатлий — профессиональный ведущий мероприятий"
                className="main__head-photo photo-2"/>
            <motion.img
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, rotate:-5}}
                transition={{delay: 0, duration: 0.3}}
                viewport={{once: true}}
                src="/head_photo_3.webp"
                alt="Сухов Анатлий — профессиональный ведущий мероприятий"
                className="main__head-photo photo-3"/>
            <motion.img
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, rotate:-5}}
                transition={{delay: 0, duration: 0.5}}
                viewport={{once: true}}
                src="/head_photo_4.webp"
                alt="Сухов Анатлий — профессиональный ведущий мероприятий"
                className="main__head-photo photo-4"/>
            <motion.img
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, rotate:10}}
                transition={{delay: 0, duration: 0.5}}
                viewport={{once: true}}
                src="/head_photo_5.webp"
                alt="Сухов Анатлий — профессиональный ведущий мероприятий"
                className="main__head-photo photo-5"/>
            <motion.img
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, rotate:-5}}
                transition={{delay: 0, duration: 0.3}}
                viewport={{once: true}}
                src="/head_photo_6.webp"
                alt="Сухов Анатлий — профессиональный ведущий мероприятий"
                className="main__head-photo photo-6"/>

            {/* Центральный блок с текстом */}
            <div className="main__head-inner">

                <div className="main__head-content">
                    <div className="main__head-block left">
                        <motion.h2
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: .3, duration: 0.6}}
                            viewport={{once: true}}
                        >
                            SUHOV
                        </motion.h2>
                        <motion.h2
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: 1, duration: 0.6}}
                            viewport={{once: true}}
                            className="subtitle"
                        >ведущий на корпоратив <br/><span>без компромисса
                        </span>
                        </motion.h2>
                    </div>

                    <svg className="main__head-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 120"
                         fill="none">
                        <path d="M1 0V120" stroke="#9F463F" strokeOpacity="1" strokeWidth="1" strokeDasharray="4 4"/>
                    </svg>

                    <div className="main__head-block right">
                        <motion.h2
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: .5, duration: 0.6}}
                            viewport={{once: true}}
                            onMouseEnter={meroVisible}
                            onMouseLeave={meroHidden}
                            className={isMeroVisible ? 'h2-mero-active' : 'h2'}
                        >
                            {
                                isMeroVisible ? 'MERO' : 'VEDET'
                            }
                        </motion.h2>
                        <motion.h2
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: 1, duration: 0.6}}
                            viewport={{once: true}}
                            className="subtitle"
                        >
                            с вас повод <br/>с меня атмосфера
                        </motion.h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;