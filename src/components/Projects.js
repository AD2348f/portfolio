import useApi from '../hooks/UseApi'
import '../App.css';

const Projects=() => {
 
    const [projects] = useApi();

  return (
      <div>
          <h2>Projects</h2>
<div className="bigpwrap">

    {projects.map((project) => (
        <div className="ProjectWrapper2">
            <div className="ProjectWrapper">
                <div className="ProjectCard">
                    <div>Name: {project.fields.projectName}</div>                
                    <img src={`https:${project.fields.picture && project.fields.picture.fields && project.fields.picture.fields.file && project.fields.picture.fields.file.url}`} width='300' height='300' alt='project'></img>
                    <div>Created by: {project.fields.createdBy}</div>
                    <div>Techstack: {project.fields.techstack}</div>
                    <div>{project.fields.description}</div>
                </div>
            </div>
        </div>
              ))} 

</div>
</div>
  )
}
export default Projects;