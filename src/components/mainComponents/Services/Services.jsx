import './Services.scss'
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import {useEffect, useState} from "react";
import FormApl from "../../FormApl/FormApl";

function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalAplOpen, setIsModalAplOpen] = useState(false)
    const [selectedService, setSelectedService] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const servicesArr =
        [
            {
                title: 'COZY',
                backgroundImgSrc: '/services_bg_0.webp',
                fullDescription: '«Пакет камерный» - 40 к рублей (4 часа ведущи + 4 часа DJ):\n' +
                    '· Работа ведущего 4 часа; \n' +
                    '· Типовой тайминг; \n' +
                    '· Две консультации;\n' +
                    '· Проведение мини-церемонии (5 минут);\n' +
                    '· Работа DJ - 4 часа;\n' +
                    '· Развлекательный контент (интерактивы от ведущего);\n' +
                    '· Персонализированная анкета от DJ.'
            },
            {
                title: 'PERSONAL',
                backgroundImgSrc: '/services_bg_1.webp',
                fullDescription: '«Пакет персонализированный» - 60 к рублей (5 часов ведущий, 6 часов DJ):\n' +
                    '· Работа ведущего - 5 часов;\n' +
                    '· Работа DJ - 6 часов;\n' +
                    '· Персонализированная анкета от DJ;\n' +
                    '· Специальный сет-лист на welcome-зону от DJ;\n' +
                    '· Персонализированный контент под свадьбу (интерактивы про гостей, пару 3-5: красавчик в детстве, свадьба столетия, квиз про пару, гет контакт, нейро гость, нейро ребёнок);\n' +
                    '· Две консультации;\n' +
                    '· Проведение церемонии (15 минут);\n' +
                    '· Развлекательный контент (итерактивы) от ведущего;\n' +
                    '· Типовой тайминг.'
            },
            {
                title: 'OLD MONEY',
                backgroundImgSrc: '/services_bg_2.webp',
                fullDescription: '«Пакет Old Money» - 90 к рублей (7 часов ведущий, 8 часов DJ):\n' +
                    '· Работа ведущего - 7 часов;\n' +
                    '· Работа DJ - 8 часов;\n' +
                    '· Персонализированная анкета от DJ;\n' +
                    '· Специальный сет-лист на welcome-зону от DJ;\n' +
                    '· Персонализированный контент под свадьбу (интерактивы про гостей, пару 3-5: красавчик в детстве, свадьба столетия, квиз про пару, гет контакт, нейро гость, нейро ребёнок);\n' +
                    '· Три консультации;\n' +
                    '· Проведение церемонии (15 минут);\n' +
                    '· Развлекательный контент (итерактивы) от ведущего;\n' +
                    '· Типовой тайминг;\n' +
                    '· Reels с Вашего события;\n' +
                    '· Юмористическое интервью.'
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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % servicesArr.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + servicesArr.length) % servicesArr.length);
    };

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
                        <Button
                            onClick={() => setIsModalAplOpen(true)}
                            title="Оставить заявку"
                            variant="primary"
                            className="service-modal__button"
                        />
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