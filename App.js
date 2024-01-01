import './stylepage.css';
import './responsive.css';
import logo from './images/1686134831250-removebg-preview.png';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpenText, faLink, faQuoteLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const App = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration:120,
          easing: "ease-out-cubic",
        });
    }, []);

    const open = () => {
        window.open("http://localhost:3001/.skills","self");
    }

    const openpopup = () => {
        document.querySelector(".popup").style.display = 'flex';
    }
    return (
        <div className = "header-box" data-aos='zoom-in'>
        <nav >
                <div>
                    <button className='Home' onClick={open}> <span>Home</span></button>
                    <button id='popup-button' onClick={openpopup}>
                        <FontAwesomeIcon className='fontawsm' icon={faBars} style={{color: "#4e4f50",}} />
                    </button>
                    <ul>
                    <li><Link to="header-box" smooth={true} duration={500}>Home</Link></li>
      <li><Link to="header-box" smooth={true} duration={500}>About</Link></li>
      <li><Link to="qualification" smooth={true} duration={500}>Qualification</Link></li>
      <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
      <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
      <li><Link to="work" smooth={true} duration={500}>Experience</Link></li>
      <li><Link to="extracuricular" smooth={true} duration={500}>Extracurricular</Link></li>
    </ul>
        </div>
            </nav>
        <div className='popup'>
            <ul>
            <li><Link to="header-box" smooth={true} duration={500}>About</Link></li>
      <li><Link to="qualification" smooth={true} duration={500}>Qualification</Link></li>
      <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
      <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
      <li><Link to="work" smooth={true} duration={500}>Experience</Link></li>
      <li><Link to="extracuricular" smooth={true} duration={500}>Extracurricular</Link></li>
            </ul>
        </div>
        <header>
        <div className = "box1">
        <h1> I am <span>Avika Saxena</span> </h1>
        </div>
        <div className="box2">
        <div className = 'content' >
                        <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "gray" }}/>
            <p>"College student skilled in C, C++, Python, and web development. Award-winning singer with event hosting and hackathon leadership experience. Committed to learning and growth."
                        </p>
                        <div className='check'>
                            <a href='.'>Check Qualification</a>
                        </div>
                        <ul>
                            <li>Rungta College of Engineering and Technology Bhilai <br />2020 - 2024</li>
                            <li>Nirmal Hr. Sec. School Jagdalpur<br />2019 - 2020</li>
                            <li>Nirmal Hr. Sec. School Jagdalpur<br />2017 - 2018</li>
            </ul>
        </div>
        <div className='myimage'>
            <div className="myimage-in">
            <img src={logo} alt='myimage' />
            </div> 
        </div>
        <div className = 'content' id='content2'>
            <div className="contact">
                            <FontAwesomeIcon icon={faPhone} size="xl" style={{ color: "#10b40e", }} />
                            <a href='tel:7587174339'>7587174339</a>
            </div>
            <div className="contact">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} size="xl" style={{ color: "#022f7e", }} />
                            <a href='mailto:avikasaxena1923@gmail.com'>avikasaxena1923@gmail.com</a>
            </div>
            <div className="contact">
                            <FontAwesomeIcon icon={faLink} size="xl" style={{ color: "#0499f6", }} />
                            <a href="https://www.linkedin.com/in/avika-saxena-a0007a223/">My Linkedin</a>
            </div>
        </div>
        </div>
        </header>
        </div>
    )
}

export default App;