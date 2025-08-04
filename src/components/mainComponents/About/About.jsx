import { useState } from 'react';
import './About.scss';
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal"; // путь укажи согласно своей структуре

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='about__wrapper'>
            <div className='about container'>
                <div className="about__content">
                    <div className="about__title">Обо мне</div>
                    <div className="about__text">
                        Голос пространства. <br />
                        Темп события. <br />
                        Энергия присутствия. <br />
                    </div>

                    <Button
                        variant='secondary'
                        title='Посмотреть видео с мероприятий'
                        onClick={() => setIsModalOpen(true)}
                    />
                </div>

                <img src="/about_photo_1.webp" alt="Обо мне" />

                <p>
                    <span className='span'>Остаюсь в памяти,</span><br />
                    Не только в кадре.
                </p>

                <div className='about__glass'>
                    <div className='about__glass-content'>
                        Умею быть тишиной, когда в ней нуждается момент.
                        <br /><br />
                        Голосом — когда он должен прозвучать вовремя.
                        <br /><br />
                        Ведущий — не про сценарий и тайминг. Ведущий — про воплощение желаний.
                        <br /><br />
                        Работаю с людьми — не с микрофоном.
                    </div>
                </div>
            </div>

            {/* Модалка с видео */}
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} type="video">
                <div className="about__video-wrapper">
                    <video controls autoPlay>
                        <source src="/video/video_1.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Modal>
        </div>
    );
}

export default About;
