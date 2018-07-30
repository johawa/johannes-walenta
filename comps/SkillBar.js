import css from '../styles/skillbar.css';

import Aux from '../hoc/Aux';

const SkillBar = (props) => {
    return (
        <Aux>
            <div className={css.Container}>
                <div className={css.Skills} 
                style={{ backgroundColor: props.color, width: props.width }}></div>
            </div>
            <p>{props.tag}</p>
        </Aux>
    )
}

export default SkillBar;