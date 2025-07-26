import './MainDescription.scss';
import Button from "../../Button/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../Modal/Modal";
import FormApl from "../../FormApl/FormApl";

const STAGES = [
    {
        id: 1,
        desc: 'Погружение в вашу идею. \n Обсуждаем сценарий свадьбы, дня рождения или корпоратива, учитывая характер гостей и ваши пожелания.',
    },
    {
        id: 2,
        desc: 'Разработка индивидуальной программы.\n Адаптирую концепцию под ваш формат - будь то камерная свадьба или масштабный корпоративный тимбилдинг.',
    },
    {
        id: 3,
        desc: 'Энергия и драйв.\n Как профессиональный ведущий с 10-летним опытом, я умею заряжать зал и импровизировать в реальном времени.',
    },
    {
        id: 4,
        desc: 'Контроль всех деталей мероприятия. \n От музыкального сопровождения до точного тайминга - всё под моим профессиональным надзором.',
    },
    {
        id: 5,
        desc: 'Результат: \nВаш праздник станет незабываемым событием, о котором гости будут вспоминать годами!',
    },
];

function MainDescription() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visibleStagesCount, setVisibleStagesCount] = useState(1);

    const showNextStage = () => {
        if (visibleStagesCount < STAGES.length) {
            setVisibleStagesCount(prev => prev + 1);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Функция для форматирования текста с жирным первым предложением
    const formatStageText = (text) => {
        const parts = text.split('\n');
        return (
            <>
                <strong>{parts[0]}</strong>
                {parts.length > 1 && (
                    <>
                        <br />
                        {parts[1]}
                    </>
                )}
            </>
        );
    };

    return (
        <div className='main__description'>
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                type='apl'
                onClose={closeModal}
            >
                <FormApl head={true} />
            </Modal>

            <div id='about' className="description__wrapper container">
                <h1>Анатолий Сухов — профессиональный ведущий корпоративов в Москве, а также свадеб, дней рождений и других event'ов</h1>

                <div className="description__content">
                    <img
                        loading='lazy'
                        src="/main_desc_photo_1.webp"
                        alt="Фото Анатолия Сухова"
                        className="description__img"
                        width={500}
                        height={500}
                    />
                    <div className="description__content-text">
                        <p>
                            Меня зовут Анатолий Сухов, я — профессиональный ведущий мероприятий с 10-летним опытом.
                            Специализируюсь на создании живых праздников для свадеб, корпоративов и дней рождений, где
                            гости становятся участниками действия, а не просто зрителями.
                        </p>
                        <p>
                            «Ведущий-режиссёр» — Создаю сценарии под ваши запросы. Ваш корпоратив —
                            не набор конкурсов, а история с завязкой и кульминацией.
                        </p>
                        <p>
                            Мой стиль — энергия без пафоса, интеллигентный юмор и живая импровизация. Я не «типичный тамада» —
                            создаю атмосферу доверия, где гости чувствуют себя раскрепощённо. Ваш праздник с профессиональным
                            ведущим запомнится искренними эмоциями и теплом!
                        </p>
                    </div>
                </div>

                <h3 className="description__subtitle">Как я работаю?</h3>
                <div className="description__work">
                    {STAGES.slice(0, visibleStagesCount).map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="description__work-how"
                        >
                            {formatStageText(item.desc)}

                        </motion.div>
                    ))}
                    <span><motion.img
                    animate={{
                        y : [0, 10, 0 , 10, 0],
                        rotate: [0, -2, 2, -1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                    }}
                    initial={{ opacity: 0 }}
                    viewport={{ margin: "-20% 0px"}}
                        src="/arrow_bot.svg"
                        alt="arrow"
                    /></span>
                    {visibleStagesCount === STAGES.length ? (
                        <Button
                            onClick={openModal}
                            title='Заказать мероприятие'
                            variant='primary'
                        />
                    ) : (
                        <Button
                            onClick={showNextStage}
                            title='А дальше?'
                            variant='primary'
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainDescription;