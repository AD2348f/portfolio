import React, { Component } from 'react'
import { ImGithub, ImLinkedin, ImMail4, ImFileEmpty, ImHtmlFive, ImCss3 } from "react-icons/im";
import { SiJavascript, SiNodeDotJs, SiGithub, SiPostgresql, SiReact, SiBootstrap, SiAzuredevops, SiMongodb } from "react-icons/si";
import { GrTest } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import { AiTwotoneApi } from "react-icons/ai";

export default class Techstack extends Component {
    render() {
        return (
            <div>
                <h2 id="techstack">TechStack & Skills</h2>

                <h3>Frontend</h3>
                <div className="frontendwrapper">
                <div className="techStack__Icon"><ImHtmlFive size={'3rem'} color={'#d33115'}/>HTML 5</div>
                <div className="techStack__Icon"><ImCss3 size={'3rem'} color={'#004dcf'}/>CSS 3</div>
                <div className="techStack__Icon"><SiJavascript size={'3rem'} color={'#FFC107'}/>JavaScript</div>
                <div className="techStack__Icon"><SiReact size={'3rem'} color={'#00bcd4'}/>React JS</div>
                <div className="techStack__Icon"><SiBootstrap size={'3rem'} color={'#9c27b0'} />Bootstrap</div>
                </div>

                <h3>Backend</h3>
                <div className="frontendwrapper">
                <div className="techStack__Icon"><SiNodeDotJs size={'3rem'} color={'#81c784'} />Node.js (Express)</div>      
                <div className="techStack__Icon"><SiPostgresql size={'3rem'} color={'#2196f3'}/>SQL, NoSQL</div>
                <div className="techStack__Icon"><SiMongodb size={'3rem'} color={'#00d084'} />Mongo DB</div> 
                <div className="techStack__Icon"><AiTwotoneApi size={'3rem'} color={'#2196f3'}/>Restful API’s</div>   
                </div>

                <h3>Other</h3>
                <div className="frontendwrapper">
                <div className="techStack__Icon"><SiGithub size={'3rem'} color={'#000000'}/>Git & GitHub</div>
                <div className="techStack__Icon"><SiAzuredevops size={'3rem'} color={'#0d47a1'}/> DevOps <br /> (Hosting, Deployment, <br />  Monitoring) </div>
                <div className="techStack__Icon"><GrTest size={'3rem'} color={'#2196f3'}/>Software Testing <br />  (TDD)</div>
                <div className="techStack__Icon"><DiScrum size={'3rem'} color={'#2196f3'}/>Agile tools <br />  and methodologies</div>        
                </div>  
            </div>
        )
    }
}



