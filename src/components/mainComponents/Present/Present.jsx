import './Present.scss';
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import {useState} from "react";
import FormApl from "../../FormApl/FormApl";

function Present() {
    const presentArr = [
        {
            title: 'Бесплатный фотограф',
            imgLink: '/presents_1.webp',
        },
        {
            title: 'Бесплатный диджей',
            imgLink: '/presents_2.webp',

        },
        {
            title: '+1 час работы ведущего',
            imgLink: '/presents_3.webp',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGift, setSelectedGift] = useState(null);

    const handleGiftSelect = (index) => {
        setSelectedGift(index);
        setIsModalOpen(true);
    };

    return (
        <div className='main__presents'>
            <h2 className="presents-heading">Все любят подарки, забирай свой</h2>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} type='apl'>
                    <p>Оставьте заявку и
                        получите: <strong>{selectedGift !== null && presentArr[selectedGift].title}</strong></p>
                    <FormApl head={false}/>
                    <input type="hidden" name="gift"
                           value={selectedGift !== null ? presentArr[selectedGift].title : ''}/>
            </Modal>

            <div className="presents__wrapper ">
                    <div className="presents__inner container">
                        {presentArr.map((item, index) => (
                            <div
                                key={index}
                                className={`presents__item gift-${index}`}
                                onClick={() => handleGiftSelect(index)}
                            >
                                <div className="presents__item-title">{item.title}</div>
                                <div className="presents__item-box">
                                    <img src={item.imgLink} alt="" className="presents__item-img"/>
                                </div>

                                <Button
                                    variant='primary'
                                    title='Забрать'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleGiftSelect(index);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

        </div>
    )
}

export default Present;