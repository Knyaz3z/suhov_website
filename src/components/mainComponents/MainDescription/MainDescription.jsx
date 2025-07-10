import './MainDescription.scss'
import Button from "../../Button/Button";
import {useState} from "react";
import {motion} from "motion/react"
import Modal from "../../Modal/Modal";

function MainDescription() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const stages =
        [
            {
                id: 1,
                desc: 'Погружение в вашу идею. Обсуждаем сценарий свадьбы, дня рождения или корпоратива, учитывая характер гостей и ваши пожелания.'
            },
            {
                id: 2,
                desc: 'Адаптация под формат. Будь то камерная свадьба или масштабный тимбилдинг — разрабатываю уникальную программу.'
            },
            {
                id: 3,
                desc: 'Энергия и драйв. Я — эмоциональный ведущий, который умеет заряжать зал и импровизировать «здесь и сейчас».'
            },
            {
                id: 4,
                desc: 'Контроль деталей. От музыкального сопровождения до тайминга — всё под моим надзором.'
            },
            {
                id: 5,
                desc: 'Результат: Ваш праздник станет ярким событием, о котором гости будут вспоминать годами!'
            },
        ]

    const [isNumberVis, setIsNumVis] = useState(1)

    function setNumber() {
        if (isNumberVis < stages.length) setIsNumVis(isNumberVis + 1)
    }

    return (
        <div className='main__description'>
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                type='apl'
            >
                <form className='services__apl' action="">
                    <p>Оставьте заявку и мы с вами свяжемся</p>
                    <input type="text" placeholder='Ваше имя'/>
                    <input type="text" placeholder='Номер телефона'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Сообщение'/>
                    <button type='submit'>Отправить заявку</button>
                </form>
            </Modal>
            <div className="description__wrapper container">
                <h1>Анатолий Сухов — профессиональный ведущий мероприятий в Москве: свадьбы, дни рождения,
                    корпоративы</h1>

                <div className="description__content">
                    <img loading='lazy' src="/main_desc_photo_1.webp" alt="my_photo" className="description__img"/>
                    <div className="description__content-text">
                        <div>
                            Меня зовут Анатолий Сухов, я — профессиональный ведущий мероприятий с 10-летним опытом. Моя
                            специализация — создание трендового праздника, где гости не просто зрители, а участники
                            действия.
                        </div>
                        <div>
                            «Ведущий-режиссёр» — Создаю сценарии, а не работаю по шаблону. Ваш корпоратив —
                            не набор конкурсов, а история с завязкой и кульминацией.
                        </div>
                        <div>
                            «Мой стиль — энергия без пафоса, интеллигентный юмор и живая импровизация. Я не «тамада с
                            пошлыми шутками» — я создаю атмосферу, где гости чувствуют себя раскрепощённо, и комфортно.
                            Ваш праздник запомнится теплом и искренними эмоциями!»
                        </div>
                    </div>
                </div>

                <h3>Как я работаю?</h3>
                <div className="description__work">
                    {
                        stages.slice(0, isNumberVis).map((item, index) => (

                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: .1, duration: 0.4}}
                                key={item.id}
                                className={`description__work-how`}
                            >
                                <span>{item.id} этап</span> {item.desc}</motion.div>
                        ))
                    }
                    {
                        isNumberVis === 5 ? (
                            <Button onClick={() => setIsModalOpen(true)} title='Заказать мероприятие'
                                    variant='primary'/>
                        ) : (
                            <Button onClick={setNumber} title='А дальше?' variant='primary'/>
                        )
                    }

                </div>


            </div>

        </div>
    )
}

export default MainDescription