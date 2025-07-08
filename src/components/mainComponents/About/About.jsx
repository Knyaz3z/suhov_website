import './About.scss'
import Button from "../../Button/Button";

function About() {

    return (
        <div className='about__wrapper'>
            <div className='about container'>
                <div className="about__content">
                    <div className="about__title">ABOUT ME</div>
                    <div className="about__text">Голос пространства. <br/>
                        Темп события. <br/>
                        Энергия присутствия. <br/></div>

                    <Button variant='secondary' title='Посмотреть как это работает вживую'/>
                </div>
                <img src="/about_photo_1.jpg" alt=""/>
                <p>
                    Анатолий остается в памяти. <br/>
                    Не в кадре.
                </p>
                <div className='about__glass'>
                    <div className='about__glass-content'>
                        Ведущий, который умеет быть тишиной, если в ней нуждается ваша аудитория.
                        <br/>
                        <br/>
                        И голосом,
                        если он должен прозвучать вовремя.
                        <br/>
                        <br/>
                        Анатолий — это не просто сценарий и тайминг.
                        Это человек, который создаёт <br/> <span>ритм события</span>.
                        <br/>
                        <br/>
                        Я работаю с людьми,
                        а не с микрофоном.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About