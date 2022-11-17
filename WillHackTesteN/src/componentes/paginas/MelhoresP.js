import styles from "./MelhoresP.module.css"
import melhoresP1 from "../../img/MelhoresP1.png"

function MelhoresP(){
    return(
    <div className={styles.corpo}>
        <h1>As melhores práticas<br/> do mercado</h1>
        <p>Com metodologia própria em todas as etapas da jornada<br/> para alavancar seus projetos e escalar sua receita.</p>
        <div className={styles.separador}>
            <img className={styles.imagem} src={melhoresP1} alt="ilustração" />
        </div>
    </div>
    )
}
export default MelhoresP