import './Numbers.scss';
import {useState} from "react";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import FormApl from "../../FormApl/FormApl";

function Numbers() {
    const numbersArr = [
        {
            number: '87',
            onHover: 'и в ней был смысл. Не каждый ведущий на это способен.',
            text: 'событий, где звучала пауза',
        },
        {
            number: '1200',
            onHover: 'но каждый чувствовал себя приглашённым лично.',
            text: 'Гостей на одном вечере',
        },
        {
            number: '5',
            onHover: 'сделано не ради игры, а ради мысли и контакта.',
            text: 'Форматов интеллектуальных игр',
        },
        {
            number: '16',
            onHover: 'и ни один — без истории, которую потом вспоминают.',
            text: 'Городов',
        },
        {
            number: '∞',
            onHover: 'это не преувеличение. Просто никто не считал.',
            text: 'Эмоций',
        },
        {
            number: '15',
            onHover: 'с жалобой на слишком крутое мероприятие',
            text: 'Звонков',
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div id='number' className="main__numbers">

            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                type='apl'
            >
                <FormApl head={true}/>
            </Modal>
            <div className="numbers__wrapper container">
                {numbersArr.map((item, index) => (
                    <div
                        key={index}
                        className="numbers__item"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`numbers__card ${hoveredIndex === index ? 'hovered' : ''}`}>
                            <div className="numbers__content">
                                {hoveredIndex === index ? (
                                    <p className="numbers__description">{item.onHover}</p>
                                ) : (
                                    <p className="numbers__value">{item.number}</p>
                                )}
                            </div>
                            <p className="numbers__label">{item.text}</p>
                        </div>
                    </div>
                ))}

            </div>
            <Button onClick={() => setIsModalOpen(true)} variant='primary' title='Получить уникальное предложение' size='small'/>
        </div>
    );
}

export default Numbers;