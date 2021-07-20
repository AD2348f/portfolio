import './App.css';
import "./assets.css";
import portrait from "./pictures/Portrait1.png"
import { ImGithub, ImLinkedin, ImMail4, ImFileEmpty, ImHtmlFive, ImCss3 } from "react-icons/im";
import { SiJavascript, SiNodeDotJs, SiGithub, SiPostgresql, SiReact, SiBootstrap, SiAzuredevops, SiMongodb } from "react-icons/si";
import { AiTwotoneApi, AiOutlineCopyrightCircle } from "react-icons/ai";
import { GrTest } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import useApi from './hooks/UseApi'
import Projects from "./components/Projects"
import React, { useEffect, useState } from "react";



function App() {

  const [projects] = useApi()
  const [isLoading, setIsLoading] = useState(false);
  console.log (projects)
  return (
    <div className="App">
      
      <Navbar />
      <Content />
      <Projects />
  
   

{/* {projects.map((project) => (
            <div className="ProjectWrapper">
              <div className="ProjectCard">
                <div>Name: {project.fields.projectName}</div>                
                <img src={`https:${project.fields.picture && project.fields.picture.fields && project.fields.picture.fields.file && project.fields.picture.fields.file.url}`} width='300' height='300' alt='project'></img>
                <div>Created by: {project.fields.createdBy}</div>
                <div>Techstack: {project.fields.techstack}</div>
                <div>{project.fields.description}</div>
              </div>
            </div>
        ))}  */}

<div className="App__Copyright"><AiOutlineCopyrightCircle size={'0.8rem'} />Alexander Ditz 2021</div>
    </div>
  );
}
export default App;
