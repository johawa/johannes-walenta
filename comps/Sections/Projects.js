import css from '../../styles/Sections/projects.css';

import ProjectCard from '../ProjectCard';
import Aux from '../../hoc/Aux';


const Projects = () => (
    <Aux>
        <div className={css.Projects__Left}>
            <ProjectCard position={'first'} />
            <ProjectCard position={'second'} />
            <ProjectCard position={'third'} />            
        </div>
        <div className={css.Projects__Right}>           
            <ProjectCard position={'fourth'} />
            <ProjectCard position={'fifth'} />
            <ProjectCard position={'six'} />
            <ProjectCard position={'seven'} />
        </div>
    </Aux>

)

export default Projects
