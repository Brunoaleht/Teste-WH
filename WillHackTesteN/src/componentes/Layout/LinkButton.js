import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './LinkButton.module.css';

function LinkButton({to,text}) {
    let Link = Scroll.Link
    return ( 
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
     );
}

export default LinkButton;