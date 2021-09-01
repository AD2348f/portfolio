import useApi from '../hooks/UseApi'
import '../App.css';

const Projects=() => {
 
    const [projects] = useApi();

  return (
      <div>
          <div className="Placeholder" id="projects"></div>
          <h2 >Projects</h2>
<div className="bigpwrap">

    {projects.map((project) => (
        <div className="ProjectWrapper2">
            <div className="ProjectWrapper">
                <div className="ProjectCard">
                    <h4>{project.fields.projectName}</h4>                
                    <img src={`https:${project.fields.picture && project.fields.picture.fields && project.fields.picture.fields.file && project.fields.picture.fields.file.url}`} width='300' height='300' alt='project'></img>
                    <div className="Project__Card-Section-Wrapper"><div className="Project__Card-Section-Title">Created by:</div> {project.fields.createdBy}</div>
                    <div className="Project__Card-Section-Wrapper"><div className="Project__Card-Section-Title">Techstack:</div> {project.fields.techstack}</div>
                    <div>{project.fields.description}</div>
                    <div className="Project__Link-Wrapper">
                        <div className="Project__Link">Live Link</div>
                        <div className="Project__Link">GitHub</div>
                    </div>
                </div>
            </div>
        </div>
              ))} 

</div>
</div>
  )
}
export default Projects;