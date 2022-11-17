import contato from "../../img/contato1.png"
import styles from "./Contatos.module.css"
import {FaWhatsapp} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'

function Contatos() {
    return ( 
        <div className={styles.corpo} id="contatos">
            <h1>Precisa de mais informações</h1>
            <p>Quer conversar com a gente? Nossa equipe de especialistas estão te plantão<br/> para esclarecer qualquer dúvida que você tenha sobre a jornada</p>
            <button className={styles.button}><FaWhatsapp className={styles.icon}/> FALAR COM UM ESPECIALISTA</button>
            <div className={styles.row}>
                <div className={styles.card}>Os melhores squads para seu produto digital</div>
                <div className={styles.card}>Gestão especializada para você ganhar tempo</div>
                <div className={styles.card}>Cultura de Produto que potencializa as entregas</div>
                <div className={styles.card}>Mais visibilidade e controle de sua iniciativa</div>
            </div>
            <hr/>
            <div>
                <p>DESENVOLVIDO COM <AiFillHeart/> PARA VOCÊ POR</p>
            </div>
            <img src={contato} alt="ilustração" />
        </div>
     );
}
export default Contatos;