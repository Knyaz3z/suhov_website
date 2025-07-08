import './styles/null.css'
import './styles/global.css'
import Head from "./components/mainComponents/Head/Head";
import About from "./components/mainComponents/About/About";
import Scream from "./components/mainComponents/Scream/Scream";
import MainDescription from "./components/mainComponents/MainDescription/MainDescription";
import Numbers from "./components/mainComponents/Numbers/Numbers";

function App() {


    return (
        <>
            <main>
                <Head/>
                <About/>
                <Scream/>
                <MainDescription/>
                <Numbers/>
            </main>
        </>
    )
}

export default App
