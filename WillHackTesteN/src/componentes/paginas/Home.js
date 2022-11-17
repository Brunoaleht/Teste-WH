import styles from './Home.module.css'
import scroll1 from "../../img/scroll1.png"

import LinkButton from '../Layout/LinkButton';
import LinkButtonW from '../Layout/LinkButtonW';


function Home() {
    return ( 
        <div className={styles.corpo} id="home">
            <section className={styles.homeContainer}>
                <h1>if there's a <span className={styles.azul}>Will</span>,</h1>
                <h1>start <span className={styles.verde}>Building</span> your <span className={styles.rosa}>Dream</span></h1>
                <h1>and <span className={styles.salmo}>Hack</span> your <span className={styles.amarelo}>Way</span></h1>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <LinkButtonW to='/newproject' text='COMEÇA AGORA'/>
                    </li>
                    <li className={styles.item}>
                        <LinkButton to='/newproject' text='FALAR COM UM ESPECIALISTA'/>
                    </li>
                </ul>
                <p>Will.Hack é uma agência de design,marketing digital e software house especializado na criação de experiências e performances para startups e as empresas lideres mundiais</p>
                <div className={styles.card}>EXPLORE A JORNADA WILL.HACK</div>
                <img className={styles.scroll} src={scroll1} alt="scroll1" />    
            </section>
        </div>
     );
}

export default Home;
