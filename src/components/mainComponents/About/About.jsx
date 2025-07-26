import './About.scss'
import Button from "../../Button/Button";

function About() {

    return (
        <div className='about__wrapper'>
            <div className='about container'>
                <div className="about__content">
                    <div className="about__title">Обо мне</div>
                    <div className="about__text">Голос пространства. <br/>
                        Темп события. <br/>
                        Энергия присутствия. <br/></div>

                    <Button variant='secondary' title='Посмотреть видео с мероприятий'/>
                </div>
                <img src="/about_photo_1.webp" alt=""/>
                <p>
                    <span className='span'>Остаюсь в памяти,</span><br/>
                    Не только в кадре.
                </p>
                <div className='about__glass'>
                    <div className='about__glass-content'>
                        Умею быть тишиной, когда в ней нуждается момент.
                        <br/><br/>
                        Голосом — когда он должен прозвучать вовремя.
                        <br/><br/>
                        Ведущий — не про сценарий и тайминг. Ведущий про воплощение желаний
                        <br/><br/>
                        Работаю с людьми — не с микрофоном.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About