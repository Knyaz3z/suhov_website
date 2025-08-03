import './Sands.scss'
import Modal from "../../Modal/Modal"
import gallery from './gallery'
import { useState } from "react"

const galleryData = [
    {
        id: 1,
        title: 'Глава I',
        imgLink: '/sand_of_memories_photo_1.webp',
        imgVideoLink: '/sand_of_memories_video_1.webp',
        desc: 'Голос в зале',
    },
    {
        id: 2,
        title: 'Глава II',
        imgLink: '/sand_of_memories_photo_2.webp',
        imgVideoLink: '/sand_of_memories_video_2.webp',
        desc: 'Согласен',
    },
    {
        id: 3,
        title: 'Глава III',
        imgLink: '/sand_of_memories_photo_3.webp',
        imgVideoLink: '/sand_of_memories_video_3.webp',
        desc: 'Мои друзья',
    },
]

function Sands() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalId, setModalId] = useState(0)

    const handleGalleryClick = (id) => {
        setIsModalOpen(true)
        setModalId(id)
    }

    return (
        <div id='galery' className='main__sands'>
            <div className="sands__wrapper container">
                <div className='sands__head'>
                    <h2>Пески воспоминаний</h2>
                    <p className='sands__head-ink'>Как это выглядит изнутри</p>
                    <p>Здесь вы не зритель. Здесь вы - внутри события</p>
                </div>

                <GalleryModal
                    modalId={modalId}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />

                <div className="sands__inner">
                    {galleryData.map(({ id, ...item }) => (
                        <SandsItem
                            key={id}
                            {...item}
                            onGalleryItemClick={() => handleGalleryClick(id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function SandsItem({ title, imgLink, desc, imgVideoLink, onGalleryItemClick }) {
    return (
        <div className="sands__item">
            <div onClick={onGalleryItemClick} className="sands__item-photo">
                <p>{title}</p>
                <div className='sands__image-container'>
                    <img src={imgLink} alt="photo" />
                </div>
                <div className="desc">{desc}</div>
            </div>
            <div className="sands__item-video">
                <img src={imgVideoLink} alt="" />
                <img src="/play_btn.svg" alt="Play button" className="play__btn" />
            </div>
        </div>
    )
}

function GalleryModal({ modalId, isModalOpen, setIsModalOpen }) {
    const currentGallery = gallery.find(g => g.id === modalId)
    const [imageIdOpen, setImageOpen] = useState(0)
    const [isModalImgOpen, setIsModalImgOpen] = useState(false)

    if (!currentGallery) return null

    const openImage = (id) => {
        setIsModalImgOpen(true)
        setImageOpen(id - 1)
    }

    const changeImage = (dir) => {
        setImageOpen((prev) =>
            (prev + dir + currentGallery.items.length) % currentGallery.items.length
        )
    }

    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} type='gallery'>
            {currentGallery.items.map((img) => (
                <img
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    onClick={() => openImage(img.id)}
                />
            ))}

            {isModalImgOpen && (
                <div className="img__modal-overlay">
                    <div className="img__modal">
                        <button
                            onClick={() => setIsModalImgOpen(false)}
                            className="img__modal-close"
                            aria-label="Закрыть модальное окно"
                        >
                            <svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                                      fill="#000"></path>
                            </svg>
                        </button>
                        <button onClick={() => changeImage(-1)} className="img__modal-btn prev">←</button>
                        <img className='img__modal-img' src={currentGallery.items[imageIdOpen].src} alt="" />
                        <button onClick={() => changeImage(1)} className="img__modal-btn next">→</button>
                    </div>
                </div>
            )}
        </Modal>
    )
}

export default Sands
