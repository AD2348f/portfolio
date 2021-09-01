import React from 'react';
import './Content.css';
import '../App.css';
import "../assets.css";
import portrait from "../pictures/Portrait1.png";
import cv from "../pictures/CV Alexander Ditz 20210901.pdf";
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
        <h2>a full stack web developer with a passion for frontend.</h2>      
        <img src={portrait} alt="Alexander Ditz" className="App__portrait" />      
        <div className="App__buttonPanel">
        <a className="App__Header-Button" href="https://github.com/AD2348f" target="_blank"><ImGithub size={'3rem'}/>GitHub</a>
        <a className="App__Header-Button" href="https://www.linkedin.com/in/alexander-ditz/" target="_blank"><ImLinkedin size={'3rem'} color={'#0d47a1'}/>LinkedIn</a>
        <a className="App__Header-Button" href="mailto:ditz.alexander@gmx.de"><ImMail4 size={'3rem'} color={'#b80000'}/>E-Mail</a>
        <a className="App__Header-Button" href={cv} target="_blank"><ImFileEmpty size={'3rem'} color={'#008b02'}/>CV</a>        
        </div>
    


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
     



        
    </main>
  )
}
export default Content;