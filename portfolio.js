import './stylepage.css';
import './responsive.css';
import MainComponent from './MainComponent';
import App from './App';
import Footer from './footer';

const Mainpage = () => {
    return (
        <body>
            <App />
            <MainComponent />
            <Footer/>
        </body>
    )
}

export default Mainpage;