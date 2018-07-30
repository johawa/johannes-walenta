import css from '../../styles/Sections/frameworks.css';

import FrameworkIcon from '../FrameworkIcon';


const Frameworks = (props) => (   
    <div ref={props.innerRef} className={css.Frameworks}>
        <div className={css.GridHeader}>FRAMEWORKS</div>
        <FrameworkIcon />
        <FrameworkIcon />
        <FrameworkIcon />
        <FrameworkIcon />
        <FrameworkIcon />
    </div>
)

export default Frameworks
