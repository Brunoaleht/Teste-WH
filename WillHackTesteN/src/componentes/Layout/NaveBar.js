import Conteiner from "./Conteiner";
import logo from "../../img/logo.png";
import styles from './NaveBar.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import LinkButton from "./LinkButton";
import LinkButtonW from "./LinkButtonW";



function NaveBar() {
    return ( 
        <nav className={styles.naveBar}>        
            <Conteiner>
                <Link to = 'home'>
                    <img className={styles.imagem} src={logo} alt="Will.Hack" /> 
                </Link> 
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='home'>SOLUÇÕES</Link>
                    </li>
                    <li className={styles.item}>
                        <Link 
                            to='onboarding'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >ONBOARDING
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='branding'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>BRANDING</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='develop'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>DEVELOP</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='gotomarket'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>GO TO MARKET</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='yourway'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>YOUR WAY</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='contatos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>CONTATO</Link>
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <LinkButton to='/' text="SING IN"/>
                    </li>
                    <li className={styles.item1}>
                        <LinkButtonW to='/' text="SING UP"></LinkButtonW>
                    </li>
                </ul>
            </Conteiner>
        </nav>
     );
}

export default NaveBar
