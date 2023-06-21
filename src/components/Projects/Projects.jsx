import { ProjectsData } from '../../data/ProjectsData.js'
import { pinkThemeDark as theme } from "../../theme/theme.js";
import { Link } from 'react-router-dom'
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
                              <h1>Projecct</h1>))}
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