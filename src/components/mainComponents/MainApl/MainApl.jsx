import './MainApl.scss'
import Button from "../../Button/Button";

function MainApl() {

    return (
        <div className='main__application'>

            <div className="application__wrapper">
                <div className="application__inner container">
                    <form action="">
                        <input placeholder='имя' type="text" className="application__inner-input"/>
                        <input placeholder='как с вами связаться?' type="text" className="application__inner-input"/>
                        <input placeholder='мероприятие' type="text" className="application__inner-input"/>
                        <input placeholder='когда?' type="text" className="application__inner-input"/>
                        <input placeholder='оставь свою мысль - она дойдет' type="text" className="application__inner-input"/>
                        <Button color='dark' title='Создать атмосферу вместе' />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default MainApl