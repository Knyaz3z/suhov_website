// VideoEvents.jsx
import './VideoEvents.scss';
import { useState } from "react";
import { motion } from "framer-motion";

function VideoEvents() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => setIsPlaying(true);

    return (
        <div className="video-events container">
            <motion.h2
                className="video-events__title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Как проходят мои мероприятия
            </motion.h2>

            <motion.p
                className="video-events__subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                2 минуты — и вы увидите, как оживают ваши идеи на событиях
            </motion.p>

            <div className="video-events__wrapper">
                <iframe
                    className={'video-events__video'}
                    src="https://vkvideo.ru/video_ext.php?oid=-233905713&id=456239032&hash=b1a49db52dfd9bab"
                    width="640" height="360" frameBorder="0" allowFullScreen="1"
                    style={{background: '#000'}}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
                {/*{!isPlaying ? (*/}
                {/*    <div*/}
                {/*        className="video-events__poster"*/}
                {/*        onClick={handlePlay}*/}
                {/*        style={{ backgroundImage: 'url("/video/poster_video_events.webp")' }}*/}
                {/*    >*/}
                {/*        <div className="video-events__play-btn">*/}
                {/*            <img*/}
                {/*                src="/play_btn.svg"*/}
                {/*                alt="Play button"*/}
                {/*                className="play__btn"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    <video*/}
                {/*        className="video-events__video"*/}
                {/*        controls*/}
                {/*        autoPlay*/}
                {/*        poster="/video/poster_video_events.webp"*/}
                {/*    >*/}
                {/*        <source src="/video/video_events.mp4" type="video/mp4" />*/}
                {/*        Ваш браузер не поддерживает видео.*/}
                {/*    </video>*/}
                {/*)}*/}
            </div>
        </div>
    );
}

export default VideoEvents;
