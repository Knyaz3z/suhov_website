import './MainDescription.scss'
import Button from "../../Button/Button";
import {useState} from "react";
import {motion} from "motion/react"
import Modal from "../../Modal/Modal";
import FormApl from "../../FormApl/FormApl";

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
                desc: 'Разработка индивидуальной программы. Адаптирую концепцию под ваш формат - будь то камерная свадьба или масштабный корпоративный тимбилдинг.'
            },
            {
                id: 3,
                desc: 'Энергия и драйв. Как профессиональный ведущий с 10-летним опытом, я умею заряжать зал и импровизировать в реальном времени.'
            },
            {
                id: 4,
                desc: 'Контроль всех деталей мероприятия. От музыкального сопровождения до точного тайминга - всё под моим профессиональным надзором.'
            },
            {
                id: 5,
                desc: 'Результат: Ваш праздник станет незабываемым событием, о котором гости будут вспоминать годами!'
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
                <FormApl head={true}/>
            </Modal>
            <div id='about' className="description__wrapper container">
                <h1>Анатолий Сухов — профессиональный ведущий корпоративов в Москве, а также свадеб, дней рождений и других event'ов</h1>

                <div className="description__content">
                    <img loading='lazy' src="/main_desc_photo_1.webp" alt="my_photo" className="description__img"/>
                    <div className="description__content-text">
                        <div>
                            Меня зовут Анатолий Сухов, я — профессиональный ведущий мероприятий с 10-летним опытом.
                            Специализируюсь на создании живых праздников для свадеб, корпоративов и дней рождений, где
                            гости становятся участниками действия, а не просто зрителями.
                        </div>
                        <div>
                            «Ведущий-режиссёр» — Создаю сценарии, а не работаю по шаблону. Ваш корпоратив —
                            не набор конкурсов, а история с завязкой и кульминацией.
                        </div>
                        <div>
                            Мой стиль — энергия без пафоса, интеллигентный юмор и живая импровизация. Я не «типичный тамада» —
                            создаю атмосферу доверия, где гости чувствуют себя раскрепощённо. Ваш праздник с профессиональным
                            ведущим запомнится искренними эмоциями и теплом!
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