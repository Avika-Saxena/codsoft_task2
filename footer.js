import './stylepage.css';
import './responsive.css';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-scroll'

const Footer = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
    const handleHireMeClick = () => {
        const emailAddress = 'avikasaxena1923@gmail.com'; // Replace with your email address
        const subject = 'Hire Me'; // Replace with your desired subject
        const body = 'Open to work';
    
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink;
      };
    return (
        <footer>
            <div className='part1'>
                <h1>Let's Connect there</h1>
                <button onClick={handleHireMeClick}>Hire me</button>
            </div>
            <div className='part2'>
                <div className='bigbox'>
                    <p>Thank you for visiting my portfolio site! Your presence is greatly appreciated. Feel free to explore my projects and qualifications. If you have any inquiries or opportunities for collaboration, don't hesitate to reach out. I look forward to connecting with you and sharing more about my skills and experiences. Stay inspired!</p>
                </div>
                <div className='list'>
                    <h4>Navigation</h4>
                    <ul>
      <li><Link to="header-box" smooth={true} duration={500}>About</Link></li>
      <li><Link to="qualification" smooth={true} duration={500}>Qualification</Link></li>
      <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
      <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
      <li><Link to="work" smooth={true} duration={500}>Experience</Link></li>
      <li><Link to="extracurricular" smooth={true} duration={500}>Extracurricular</Link></li>
    </ul>
                </div>
                <div className='list'>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href='tel:7587174339'>7587174339</a></li>
                        <li><a href='mailto:avikasaxena1923@gmail.com'>avikasaxena1923@gmail.com</a></li>
                        <li><a href='https://www.linkedin.com/in/avika-saxena-a0007a223'>Lets connect on LinkedIn</a></li>
                        <li><a href='https://github.com/'>My github</a></li>
                    </ul>
                </div> 
            </div>
            <div className='part3'>
                <h5>@copyright.com.avika.saxena@portfolio</h5>
            </div>
        </footer>
    )
}

export default Footer;