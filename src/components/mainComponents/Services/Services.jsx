import './Services.scss'
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import {useEffect, useState} from "react";
import FormApl from "../../FormApl/FormApl";

function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalAplOpen, setIsModalAplOpen] = useState(false)
    const [selectedService, setSelectedService] = useState(null);
    const [isSaleActive, setIsSaleActive] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const servicesArr =
        [
            {
                title: 'COZY',
                backgroundImgSrc: '/services_bg_0.webp',
                fullDescription: '· Работа ведущего 4 часа; \n' +
                    '· Типовой тайминг; \n' +
                    '· Две консультации;\n' +
                    '· Проведение мини-церемонии (5 минут);\n' +
                    '· Работа DJ - 4 часа;\n' +
                    '· Развлекательный контент (интерактивы от ведущего);\n' +
                    '· Персонализированная анкета от DJ.',
                fullPrice: '60000',
                lowPrice: '45000*'
            },
            {
                title: 'PERSONAL',
                backgroundImgSrc: '/services_bg_1.webp',
                fullDescription: '· Работа ведущего - 5 часов;\n' +
                    '· Работа DJ - 6 часов;\n' +
                    '· Персонализированная анкета от DJ;\n' +
                    '· Специальный сет-лист на welcome-зону от DJ;\n' +
                    '· Персонализированный контент под свадьбу' +
                    '· Две консультации;\n' +
                    '· Проведение церемонии (15 минут);\n' +
                    '· Развлекательный контент (итерактивы) от ведущего;\n' +
                    '· Типовой тайминг.',
                fullPrice: '80000',
                lowPrice: '60000*'
            },
            {
                title: 'OLD MONEY',
                backgroundImgSrc: '/services_bg_2.webp',
                fullDescription: '· Работа ведущего - 7 часов;\n' +
                    '· Работа DJ - 8 часов;\n' +
                    '· Персонализированная анкета от DJ;\n' +
                    '· Специальный сет-лист на welcome-зону от DJ;\n' +
                    '· Персонализированный контент под свадьбу\n' +
                    '· Три консультации;\n' +
                    '· Проведение церемонии (15 минут);\n' +
                    '· Развлекательный контент (итерактивы) от ведущего;\n' +
                    '· Типовой тайминг;\n' +
                    '· Reels с Вашего события;\n' +
                    '· Юмористическое интервью.',
                fullPrice: '115000',
                lowPrice: '90000*'
            },
        ]

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='main__services'>
            <h2>Пакеты услуг</h2>
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                type='services'
            >
                {selectedService && (
                    <div className="services-modal">
                        <h3 className="services-modal__title">{selectedService.title}</h3>
                        <div className="services-modal__content">
                            {selectedService.fullDescription.split('\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        <div className={`services-modal__price-container ${isSaleActive ? 'sale-active' : ''}`}>
                            <div className="price-wrapper">
                                <p className="full-price">Полная цена: {selectedService.fullPrice} руб.</p>
                                <p className="sale-price">Бонусная цена: {selectedService.lowPrice} руб.</p>
                            </div>
                        </div>

                        {isSaleActive ? (
                            <Button
                                onClick={() => setIsModalAplOpen(true)}
                                title="Оставить заявку"
                                variant="primary"
                                className="service-modal__button"
                            />
                        ) : (
                            <Button
                                onClick={() => setIsSaleActive(true)}
                                title="Хочу бонус"
                                variant="primary"
                                className="service-modal__button"
                            />
                        )}
                        {
                            isSaleActive ? (
                                <span style={{padding: '1em'}} className='services-modal__alert'>
                                    <span onClick={() => setIsSaleActive(false)}
                                          style={{fontSize: '1.2em', cursor: 'pointer'}}
                                    >Отменить участие в акции
                                    </span><br/>
                            *при использовании акции вы даёте согласие на использование фото и видео материалов с вашего мероприятия для наполнения контента сайта или социальных сетей ведущего
                                </span>
                            ) : (
                                ''
                            )
                        }
                    </div>
                )}
            </Modal>

            <Modal
                isModalOpen={isModalAplOpen}
                setIsModalOpen={setIsModalAplOpen}
                type='apl'
            >
                <FormApl/>
            </Modal>
            <div className="services__wrapper container">
                <div className="services__inner">

                    {servicesArr.map((item, index) => (
                        <div key={index} className={`services__item bg_${index}`}>
                            <div className="services__item-title">{item.title}</div>
                            <Button
                                size='small'
                                title='Узнать больше'
                                variant='primary'
                                onClick={() => handleOpenModal(item)}
                            />
                        </div>
                    ))}


                </div>
            </div>

        </div>
    )
}

export default Services