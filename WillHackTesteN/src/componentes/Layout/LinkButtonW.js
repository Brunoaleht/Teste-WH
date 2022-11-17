import { Link, animateScroll as scroll } from "react-scroll";
import styles from './LinkButtonW.module.css';
function LinkButtonW({to,text}) {
    
    return ( 
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
     );
}

export default LinkButtonW;