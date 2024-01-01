import './stylepage.css';
import './responsive.css';
import logo from './images/1686134831250-removebg-preview.png';
import htmlcss from "./images/Screenshot 2023-12-22 232501.png";
import js from "./images/Screenshot 2023-12-23 092102.png";
import Fullstack from "./images/Screenshot_20230225_091739.png";
import cpp from "./images/Screenshot 2023-12-23 093414.png";
import dsa from "./images/Screenshot 2023-12-23 093251.png";
import prompt from "./images/Screenshot 2023-12-23 093637.png";
import techfest from "./images/Screenshot 2023-12-24 085934.png";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import portfolioimg from "./images/Screenshot_2023-12-24_183006-removebg-preview.png";
import tributeimg from "./images/Screenshot 2023-12-24 181042.png";
import tbsimg from "./images/Screenshot_2023-12-24_185132-removebg-preview.png";
import codsoft from "./images/codsoft.png";
import bharatintern from "./images/bharatintern.png";
import hpmimg from "./images/Screenshot 2023-12-26 143613.png";
import reactportfolio from "./images/Screenshot 2023-12-26 143818.png";
import weatherimg from "./images/Screenshot 2023-12-26 144640.png";
import statelevel from "./images/Screenshot 2023-12-26 203151.png";
import hosted from "./images/WhatsApp Image 2023-12-26 at 20.10.28_24b546f2.jpg";
import hackerrank from "./images/Screenshot 2023-12-26 210212.png";
import codestudio from "./images/Screenshot 2023-12-26 210647.png"
const MainComponent = () => {
    useEffect(() => {
        AOS.init({
          duration: 120,
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
        <main >
            <div className="skills" data-aos='fade-in'>
                <div className='heading'>
                    <h2>My Skills and Certifications</h2>
                    <p>"Explore my skills and capabilities showcased in this section—a testament to my expertise in crafting impactful solutions and my dedication to mastering diverse technologies." </p>
                </div>
                <div className="cards" id='skill-card'>
                    <div className="cards-in">
                        <div className="content">
                        <div className='div-image'>
                        <img src={htmlcss} alt="htmlcss" />
                        </div>
                        <div className="div-link">
                                <a href='https://verify.letsupgrade.in/certificate/LUEJSAUG122305'>Html/css</a>
                                <li><a href="https://verify.letsupgrade.in/certificate/LUEHTML08220132">Check certificate : LUEHTML08220132</a></li>
                        </div>
                        </div>
                    </div>
                    <div className="cards-in">
                    <div className="content">
                        <div className='div-image'>
                        <img src={js} alt="js" />
                        </div>
                        <div className="div-link">
                                <a href='https://verify.letsupgrade.in/certificate/LUEJSAUG122305'>Javascript</a>
                                <li><a href="https://verify.letsupgrade.in/certificate/LUEJSAUG122305">Check certificate : LUEJSAUG122305</a></li>
                        </div>
                        </div>
                    </div>
                    <div className="cards-in">
                    <div className="content">
                        <div className='div-image'>
                        <img src={Fullstack} alt="Full Stack" />
                        </div>
                        <div className="div-link">
                                <a href='https://trainings.internshala.com/view_certificate/07AED960-80BE-278F-6CE5-EAEE9624AB34/8999B688-3E00-A21B-397B-EED3A03852ED/'>FullStack PHP/MYSQL</a>
                                <li><a href="https://trainings.internshala.com/view_certificate/07AED960-80BE-278F-6CE5-EAEE9624AB34/8999B688-3E00-A21B-397B-EED3A03852ED/">Check certificate of Full stack</a></li>
                        </div>
                        </div>
                    </div>
                    <div className="cards-in">
                    <div className="content">
                        <div className='div-image'>
                        <img src={dsa} alt="DSA" />
                        </div>
                        <div className="div-link">
                                <a href='https://credsverse.com/credentials/bc9a8bb6-1955-4699-b5a4-1286e18fe25b'>FullStack PHP/MYSQL</a>
                                <li><a href="https://credsverse.com/credentials/bc9a8bb6-1955-4699-b5a4-1286e18fe25b">Check certificate of DSA VT</a></li>
                        </div>
                        </div>
                    </div>
                    <div className="cards-in">
                    <div className="content">
                        <div className='div-image'>
                        <img src={cpp} alt="C++" />
                        </div>
                        <div className="div-link">
                                <a href='https://files.codingninjas.in/certi_image4774443f0122e3e5346e8e886809512522c4e5.jpg'>FullStack PHP/MYSQL</a>
                                <li><a href="https://files.codingninjas.in/certi_image4774443f0122e3e5346e8e886809512522c4e5.jpg">Check certificate of Full stack</a></li>
                        </div>
                        </div>
                    </div>
                    <div className="cards-in">
                    <div className="content">
                        <div className='div-image'>
                        <img src={prompt} alt="Prompt" />
                        </div>
                        <div className="div-link">
                                <a href='https://verify.letsupgrade.in/certificate/LUEPESEP123483'>FullStack PHP/MYSQL</a>
                                <li><a href="https://verify.letsupgrade.in/certificate/LUEPESEP123483">Check certificate : LUEPESEP123483</a></li>
                        </div> 
                        </div>
                    </div>
                </div>
            </div> 
            <h1 data-aos='fade-up' className='work-h1'>My <span>Work</span> Experience</h1>
            <div class="work aos-init aos-animate" data-aos="fade-up">
                <div className='work in'>
                    <div class="logo-name">
                        <div class="logo">
                            <img src={codsoft} alt="codsoft" />
                        </div>
                        <div class="name">
                            <h2>Codsoft</h2>
                            <span>5 DEC - 5 JAN , WFH</span>
                        </div>
                   </div>
                    <div class="details">
                        <h2>Web Developer Intern</h2>
                        <p>During this internship I have made two projects one is tribute page and other one is travel booking system must check in project section.</p>
                    </div>
                </div>
                <div className='work in'>
                    <div class="logo-name">
                        <div class="logo">
                            <img src={bharatintern} alt="bharatintern" />
                        </div>
                        <div class="name">
                            <h2>Bharat Intern</h2>
                            <span>10 DEC - 10 JAN , WFH</span>
                        </div>
                   </div>
                    <div class="details">
                        <h2>Web Developer Intern</h2>
                        <p>During this internship I have made two projects one is portfolio and other one is weather detection site must check in project section.</p>
                    </div>
                </div>
                
            </div>
            <h1 className='projects-h1' data-aos='zoom-out'>Let's have a <span>L00K</span> on my <span>Projects</span></h1>
            <div className="projects" data-aos='zoom-in'>
                <div className='projects-inside'>
                    <div className='projects in'>
                        <div class="cards-in">
                            <div>
                                <div class="image-project">
                                    <img src={portfolioimg} alt='portimg' />
                                </div>
                                <div class="content-project">
                                    <p>"Crafted a personal portfolio using HTML, CSS, and JavaScript, highlighting my skills and projects in web development."</p>
                                    <a href="https://avika-html-css-js.netlify.app/">Check my project</a>
                                </div>
                            </div>
                        </div>
                        <div class="cards-in">
                            <div>
                                <div class="image-project">
                                    <img src={tributeimg} alt='tribimg' />
                                </div>
                                <div class="content-project">
                                    <p>"Web developer with a tribute page to Lord Krishna, showcasing skills in HTML, CSS, and JavaScript. Experience in creating meaningful and visually engaging projects."</p>
                                    <a href='https://tribute-to-krishna.netlify.app/'>Check my project</a>
                                </div>
                            </div>
                        </div>
                        <div class="cards-in">
                            <div>
                                <div class="image-project">
                                <img src={tbsimg} alt='tbsimg' />
                                </div>
                                <div class="content-project">
                                    <p>
                                        "Developed a dynamic travel booking website using HTML, CSS, JavaScript, PHP, and MySQL, showcasing my proficiency in full-stack web development."</p>
                                    <a href=".">Check my project</a>
                                </div>
                            </div>
                        </div>
                        <div class="cards-in">
                            <div>
                                <div class="image-project">
                                    <img src={hpmimg} alt='tribimg' />
                                </div>
                                <div class="content-project">
                                    <p>
"In our team project, I contributed to the front-end development of a website featuring a heart attack prediction model. Aiming to revolutionize healthcare, it promotes early detection and proactive management of cardiovascular health."</p>
                                    <a href='.'>Not completed</a>
                                </div>
                            </div>
                        </div>
                        <div class="cards-in">
                            <div>
                                <div class="image-project">
                                    <img src={reactportfolio} alt='tribimg' />
                                </div>
                                <div class="content-project">
                                    <p>
"Discover my professional journey and expertise through my React-powered portfolio. Sleek design, showcasing skills, projects, and a glimpse into my passion for technology."</p>
                                    <a href='.'>Check my project</a>
                                </div>
                            </div>
                        </div>
                        <div class="cards-in">
                            <div>
                                <div class="image-project">
                                    <img src={weatherimg} alt='tribimg' />
                                </div>
                                <div class="content-project">
                                    <p>"Explore real-time weather updates effortlessly with my React-based weather check site. Get accurate forecasts and stay informed about current weather conditions at your fingertips."</p>
                                    <a href='.'>Check my project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='why-hire-me' data-aos='fade-up'>
                <div className='why-hire-me in' data-aos='fade-right'>
                    <div className="why-hire-me in myimage">
                        <img src={logo} alt='myimage'/>
                    </div>
                </div>
                <div className='in1'data-aos='fade-left'>
                    <h1 data-aos='zoom-in'>why <span>Hire</span> me</h1>
                    <p>Motivated developer with a strong foundation in C, C++, HTML/CSS/JS , PHP, MYSQL. Eager to bring a fresh perspective and learn quickly on the job. My dedication and enthusiasm make me a valuable candidate ready to contribute and grow with your team.</p>
                    <div className='tasks'>
                        <div>
                            <h2>3</h2>
                            <h4>projects Completed</h4>
                        </div>
                        <div>
                            <h2>2</h2>
                            <h4>yet to be completed</h4>
                        </div>
                    </div>
                    <button onClick={handleHireMeClick}>
                        <div className="inside-button"></div>
                        <div className="rounded-btn">
                            <h5>Hire me</h5>
                            </div>
                    </button>
                </div>
            </div>
            <h1>Achievements</h1>
            <div class="extracuricular" data-aos='zoom-in'> 
                <div className='cards'>
                <div className='extracuricular-card'>
                        <div className="extracuricular-card-in">
                        <img src={hackerrank} alt="" />
                        </div>
                        <p>Hackerrank Achievement</p>
                    </div>
                    <div className='extracuricular-card'>
                        <div className="extracuricular-card-in">
                        <img src={statelevel} alt="" />
                        </div>
                        <p>State level Winner in Singing competition</p>
                    </div>
                    <div className='extracuricular-card'>
                        <div className="extracuricular-card-in">
                            <img src={techfest} alt="" />
                        </div>
                        <p>TechFest Classical Singing Competition</p>
                    </div>
                    <div className='extracuricular-card'>
                        <div className="extracuricular-card-in">
                        <img src={logo} alt="" />
                        </div>
                        <p>Annual Fest singing competition RCET winner</p>
                    </div>
                    <div className='extracuricular-card'>
                        <div className="extracuricular-card-in">
                        <img src={hosted} alt="" />
                        </div>
                        <p>Hosted Annual Fest and Hackathons</p>
                    </div>
                    <div className='extracuricular-card'>
                        <div className="extracuricular-card-in">
                        <img src={codestudio} alt="" />
                        </div>
                        <p>Specialist at Code studio</p>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default MainComponent;