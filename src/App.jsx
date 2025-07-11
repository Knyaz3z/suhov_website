import './styles/null.css'
import './styles/global.css'
import Head from "./components/mainComponents/Head/Head";
import About from "./components/mainComponents/About/About";
import Scream from "./components/mainComponents/Scream/Scream";
import MainDescription from "./components/mainComponents/MainDescription/MainDescription";
import Numbers from "./components/mainComponents/Numbers/Numbers";
import Sands from "./components/mainComponents/Sands/Sands";
import Faq from "./components/mainComponents/Faq/Faq";
import Services from "./components/mainComponents/Services/Services";
import Button from "./components/Button/Button";
import {useState} from "react";
import Modal from "./components/Modal/Modal";
import Present from "./components/mainComponents/Present/Present";
import MainApl from "./components/mainComponents/MainApl/MainApl";
import Footer from "./components/Footer/Footer";
import FormApl from "./components/FormApl/FormApl";

function App() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                type='apl'
            >
                <FormApl head={true}/>
            </Modal>
            <main>
                <Head/>
                <About/>
                <Scream/>
                <MainDescription/>
                <Numbers/>
                <Sands/>
                <Faq/>
                <Services/>
                <div className="main__event container">
                    <p>Событие - это не то, что было. <br/>
                        Это то, что остается в памяти
                    </p>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        title='Создать атмосферу вместе'
                        variant='primary'/>
                </div>
                <Present/>
                <h3 className='main__apl-head container'>Отправьте послание сквозь Пространство</h3>
                <MainApl/>
            </main>

            <Footer/>
        </>
    )
}

export default App
