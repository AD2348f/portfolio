import React from 'react';
import './Content.css';
import '../App.css';
import "../assets.css";
import portrait from "../pictures/Portrait1.png";
import { ImGithub, ImLinkedin, ImMail4, ImFileEmpty, ImHtmlFive, ImCss3 } from "react-icons/im";


const Content=() => {
  const data=(
    <div className="box">
        <h2>My div content </h2>
    </div>
  );

return (
    <main className="content">
        <div className="App__title">Hi, I am Alexander Ditz,</div>
        <h2>a Full stack web developer with a passion for frontend.</h2>      
        <img src={portrait} alt="Alexander Ditz" className="App__portrait" />      
        <div className="App__buttonPanel">
        <a className="App__Header-Button" href="https://github.com/AD2348f" target="_blank"><ImGithub size={'3rem'}/>GitHub</a>
        <a className="App__Header-Button" href="https://www.linkedin.com/in/alexander-ditz/" target="_blank"><ImLinkedin size={'3rem'} color={'#0d47a1'}/>LinkedIn</a>
        <a className="App__Header-Button" href="mailto:ditz.alexander@gmx.de"><ImMail4 size={'3rem'} color={'#b80000'}/>E-Mail</a>
        <a className="App__Header-Button" href="" target="_blank"><ImFileEmpty size={'3rem'} color={'#008b02'}/>CV</a>        
        </div>
        {/* <div className="App__Header-Moreinfo-Buttons-Wrapper">
        <button className="App__Header-Moreinfo-Button" href="#techStack">Tech Stack</button>
        <button className="App__Header-Moreinfo-Button">Projects</button>
        <button className="App__Header-Moreinfo-Button">About me</button>
        
        
        </div> */}


        <div className="svg">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            >
            <defs>
                <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g className="wavies">
                <use xlinkHref="#gentle-wave" x={50} y={0} fill="#bfd8d5" />
                <use xlinkHref="#gentle-wave" x={50} y={3} fill="#dfdfdf" />
                <use xlinkHref="#gentle-wave" x={50} y={6} fill="#faf9f9" />
            </g>
            </svg>
            </div>
        
     


        
        {/* <h2 id="projects">Projects</h2>
        <div className="App__Project-Wrapper">
        <div className="App__Project-Card">
            <div className="App__Project-Title">Junior Dev Jobsearch</div>
            <div className="App__Project-Desc">A Jobsearch Plattform fully dynamic using the MERN Stack. Full functioning registration, login, and posting function. Build as final project of my Coding School with two collegues</div>
            <div className="App__Project-Tech-Wrapper">
            <div className="App__Project-Tech-Item">React</div><div className="App__Project-Tech-Item">Bootstrap</div>  
            </div>
            <img src="https://via.placeholder.com/300.png" alt="Placeholder" className="App__project-image" />          
        </div>
        <div className="App__Project-Card">
            Twitterclone
            <div className="App__Project-Tech-Wrapper">
            <div className="App__Project-Tech-Item">HTML 5</div><div className="App__Project-Tech-Item">CSS 3</div>
            </div> 
            <img src="https://via.placeholder.com/300.png" alt="Placeholder" className="App__project-image" />
        </div>
        
        <div className="App__Project-Card">Awesome characters super trump / autoquartett game<img src="https://via.placeholder.com/300.png" alt="Placeholder" className="App__project-image" /></div>
        <div className="App__Project-Card">Todo List<img src="https://via.placeholder.com/300.png" alt="Placeholder" className="App__project-image" /></div>
        <div className="App__Project-Card">Virtual Cookbook<img src="https://via.placeholder.com/300.png" alt="Placeholder" className="App__project-image" /></div>
        <div className="App__Project-Card">Training App<img src="https://via.placeholder.com/300.png" alt="Placeholder" className="App__project-image" /></div>
        <div className="App__Project-Card">Portfolio<img src="https://via.placeholder.com/300.png" alt="Placeholder" className="App__project-image" /></div>
        </div> */}
        
    </main>
  )
}
export default Content;