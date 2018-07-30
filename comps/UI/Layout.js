import css from '../../styles/layout.css';

const Layout = (props) => (
    <div className={css.Layout}>
        {props.children}
    </div>
)

export default Layout