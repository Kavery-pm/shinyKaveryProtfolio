import { ProjectsData } from '../../data/ProjectsData.js'
import { pinkThemeDark as theme } from "../../theme/theme.js";
import { Link } from 'react-router-dom'
import './Projects.css';
import SingleProject from './SingleProject.jsx';

const Projects = ()=>{
    return (
        <>
            {ProjectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {ProjectsData.slice(0, 4).map(project => (
                            <SingleProject 
                            theme={theme}
                            key={project.id}
                            id={project.id}
                            name={project.projectName}
                            desc={project.projectDesc}
                            tags={project.tags}
                            code={project.code}
                            demo={project.demo}
                            image={project.image} />))}
                        </div> 

                        {ProjectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button >
                                        View All
                                      
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}
export default Projects;