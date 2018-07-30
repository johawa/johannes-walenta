import css from '../styles/projectCard.css';

const ProjectCard = (props) => {
    let position = null
    //since nth-child is not working :(
    switch (props.position) {
        case 'first':
            position = css.first
            break;
        case 'second':
            position = css.second
            break;
        case 'third':
            position = css.third
            break;
        case 'fourth':
            position = css.fourth
            break;
        case 'fifth':
            position = css.fifth
            break;
        case 'six':
            position = css.six
            break;
        case 'seven':
            position = css.seven
            break;
        default:
            position = null
    }
   
    return (
        <div className={[css.ProjectCard, position].join(' ')}>Projext</div>
    )
}

export default ProjectCard;