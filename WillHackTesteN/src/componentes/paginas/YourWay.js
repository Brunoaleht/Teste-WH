import LinkButton from "../Layout/LinkButton";
import LinkButtonW from "../Layout/LinkButtonW";
import yourway from "../../img/yourway1.png"
import styles from './YourWay.module.css'
import scroll6 from "../../img/scroll6.png"

function YourWay() {
    return(
        <div className={styles.corpo} id="yourway">
            <h1>YourWay</h1>
            <div>
                <p>Tenha um squad alta performance trabalhando para você descobrir, desenvolver e lançar seu negócio digital.</p>
            </div>
            <img src={yourway} alt="inlustração" />
            <h1><span className={styles.azul}>Will</span>, <span className={styles.verde}>Building</span>, <span className={styles.rosa}>Dream</span> & <span className={styles.salmo}>Hack</span> the <span className={styles.amarelo}>Way</span></h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <LinkButtonW to='/newproject' text='COMEÇA AGORA'/>
                </li>
                <li className={styles.item}>
                    <LinkButton to='/newproject' text='FALAR COM UM ESPECIALISTA'/>
                </li>
            </ul>
            <div>
               <img className={styles.scroll} src={scroll6} alt="scroll6" /> 
            </div>
            
        </div>
    )
}
export default YourWay;