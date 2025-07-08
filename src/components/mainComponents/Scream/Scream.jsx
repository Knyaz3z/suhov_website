import './Scream.scss'
import {motion} from "motion/react"

function Scream() {

    return (
        <div className='scream'>
            <div className="scream__text">
                <motion.p
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: .3, duration: 0.6}}
                    viewport={{once: true}}
                >
                    Я НЕ ДЕЛАЮ МЕРОПРИЯТИЯ
                </motion.p>
                <motion.p
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: .7, duration: 0.6}}
                    viewport={{once: true}}
                >Я СОЗДАЮ <span>ЭМОЦИИ</span></motion.p>
            </div>
            <motion.img
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 1, duration: 1}}
                viewport={{once: true}}
                src="/mountain.svg" alt=""/>
        </div>
    )
}

export default Scream