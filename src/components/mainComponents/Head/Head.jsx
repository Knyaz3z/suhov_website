import React from 'react';
import './Head.scss'; // Подключаем SCSS
import {motion} from "motion/react";

function Head() {

    return (
        <div className="main__head">
            {/* Фоновые SVG волны */}
            <svg className="main__head-wave top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 510" fill="none">
                <path
                    d="M796 5.3272C480 -33.8728 -86.1667 152.5 -178 262L-230 509.827H2266.5C2338.17 394.494 2167.7 62.2006 1936.5 81.0006C1647.5 104.501 1727 492.327 1418 437.327C1109 382.327 1191 54.3272 796 5.3272Z"
                    fill="#8E2C05" fillOpacity="0.1"/>
            </svg>

            {/* Разбросанные фотографии */}
            <img src="/head_photo_1.webp" alt="" className="main__head-photo photo-1"/>
            <img src="/head_photo_3.webp" alt="" className="main__head-photo photo-2"/>
            <img src="/head_photo_3.webp" alt="" className="main__head-photo photo-3"/>
            <img src="/head_photo_1.webp" alt="" className="main__head-photo photo-4"/>
            <img src="/head_photo_3.webp" alt="" className="main__head-photo photo-5"/>
            <img src="/head_photo_3.webp" alt="" className="main__head-photo photo-6"/>

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
                        <path d="M1 0V120" stroke="#9F463F" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4"/>
                    </svg>

                    <div className="main__head-block right">
                        <motion.h2
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: .5, duration: 0.6}}
                            viewport={{once: true}}
                        >
                            MERO
                        </motion.h2>
                        <motion.h2
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: 1, duration: 0.6}}
                            viewport={{once: true}}
                            className="subtitle"
                        >
                            лучшее решение <br/>для вашего мероприятия
                        </motion.h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;