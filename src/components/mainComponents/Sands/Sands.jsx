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
        videoSrc: '/video/video_1.mov' // Добавляем путь к видео
    },
    {
        id: 2,
        title: 'Глава II',
        imgLink: '/sand_of_memories_photo_2.webp',
        imgVideoLink: '/sand_of_memories_video_2.webp',
        desc: 'Согласна',
        videoSrc: '/video/video_2.mov'
    },
    {
        id: 3,
        title: 'Глава III',
        imgLink: '/sand_of_memories_photo_3.webp',
        imgVideoLink: '/sand_of_memories_video_3.webp',
        desc: 'Наша атмосфера',
        videoSrc: '/video/video_3.mov'
    },
]

function Sands() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false) // Новое состояние для видео
    const [modalId, setModalId] = useState(0)
    const [currentVideo, setCurrentVideo] = useState('') // Для хранения текущего видео

    const handleGalleryClick = (id) => {
        setIsModalOpen(true)
        setModalId(id)
    }

    const handleVideoClick = (videoSrc) => {
        setCurrentVideo(videoSrc)
        setIsVideoModalOpen(true)
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

                {/* Модальное окно для видео */}
                <Modal isModalOpen={isVideoModalOpen} setIsModalOpen={setIsVideoModalOpen} type="video">
                    <div className="about__video-wrapper">
                        <video controls autoPlay>
                            <source src={currentVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Modal>

                <div className="sands__inner">
                    {galleryData.map(({ id, videoSrc, ...item }) => (
                        <SandsItem
                            key={id}
                            {...item}
                            videoSrc={videoSrc}
                            onGalleryItemClick={() => handleGalleryClick(id)}
                            onVideoClick={() => handleVideoClick(videoSrc)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function SandsItem({ title, imgLink, desc, imgVideoLink, onGalleryItemClick, onVideoClick }) {
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
                <img
                    src="/play_btn.svg"
                    alt="Play button"
                    className="play__btn"
                    onClick={(e) => {
                        e.stopPropagation(); // Предотвращаем всплытие события
                        onVideoClick();
                    }}
                />
            </div>
        </div>
    )
}

function GalleryModal({ modalId, isModalOpen, setIsModalOpen }) {
    const currentGallery = gallery.find(g => g.id === modalId)
    const [imageIndex, setImageIndex] = useState(0)
    const [isModalImgOpen, setIsModalImgOpen] = useState(false)

    if (!currentGallery) return null

    const openImage = (index) => {
        setImageIndex(index)
        setIsModalImgOpen(true)
    }

    const changeImage = (dir) => {
        setImageIndex((prev) =>
            (prev + dir + currentGallery.items.length) % currentGallery.items.length
        )
    }

    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} type='gallery'>
            <div className="gallery__thumbnails">
                {currentGallery.items.map((img, index) => (
                    <img
                        key={img.id}
                        src={img.src}
                        alt={img.alt}
                        onClick={() => openImage(index)} // используем индекс вместо id
                    />
                ))}
            </div>

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
                        <img className='img__modal-img' src={currentGallery.items[imageIndex].src} alt="" />
                        <button onClick={() => changeImage(1)} className="img__modal-btn next">→</button>
                    </div>
                </div>
            )}
        </Modal>
    )
}

export default Sands
