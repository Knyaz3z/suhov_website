import './Sands.scss'
import Modal from "../../Modal/Modal";
import gallery from './gallery'
import {useState} from "react";

function Sands() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalId, setModalId] = useState(0);

    function onGalleryItemClick(id){
        setIsModalOpen(true);
        setModalId(id);
    }
console.log(modalId);
    return (
        <div className='main__sands'>
            <div className="sands__wrapper container ">
                <div className='sands__head'>
                    <h2>Пески воспоминаний</h2>
                    <p className='sands__head-ink'>Как это выглядит изнутри</p>
                    <p>Здесь вы не зритель. Здесь вы - внутри события</p>
                </div>
                <GalleryModal modalId={modalId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                <div className="sands__inner ">

                    <SandsItem
                        title='Глава I'
                        imgLink='/sand_of_memories_photo_1.webp'
                        imgVideoLink='/sand_of_memories_video_1.webp'
                        desc='Голос в зале'
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        onGalleryItemClick={()=>onGalleryItemClick(0)}

                    />
                    <SandsItem
                        title='Глава II'
                        imgLink='/sand_of_memories_photo_2.webp'
                        imgVideoLink='/sand_of_memories_video_2.webp'
                        desc='Согласен'
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        onGalleryItemClick={()=>onGalleryItemClick(1)}
                    />
                    <SandsItem
                        title='Глава III'
                        imgLink='/sand_of_memories_photo_3.webp'
                        imgVideoLink='/sand_of_memories_video_3.webp'
                        desc='Мои друзья'
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        onGalleryItemClick={()=>onGalleryItemClick(2)}
                    />
                </div>
            </div>
        </div>
    )
}

function SandsItem({title, imgLink, desc, imgVideoLink, isModalOpen, setIsModalOpen, onGalleryItemClick}) {

    return (
        <div className="sands__item">
            <div onClick={onGalleryItemClick} className="sands__item-photo">
                <h5>{title}</h5>
                <div className='sands__image-container'>
                    <img src={imgLink} alt="photo"/>
                </div>

                <div className="desc">{desc}</div>
            </div>
            <div className="sands__item-video">
                <img src={imgVideoLink} alt=""/> {/*ЗДЕСЬ ДОЛЖЕН БЫТЬ ЭФФЕКТ NOISE*/}
                <img src="/play_btn.svg" width='50' height='50' alt="" className="play__btn"/>
            </div>
        </div>
    )
}

function GalleryModal({modalId, isModalOpen, setIsModalOpen}) {
    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            {gallery[modalId].items.map((img, index) => (
                <img
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                />
            ))}
        </Modal>
    )
}

export default Sands