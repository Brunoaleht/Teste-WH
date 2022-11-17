import desteI from "../../img/DesteI1.png"
import styles from "./DesteI.module.css"
function DesteI() {
    return(
    <div className={styles.corpo}>
        <h1>Deste o início ao infinito</h1>
        <p>A gente antende seus dasafios. É por isso que fazemos diferente: combinamos<br/> times de alta performance e metodologias ágeis para oferecer produtos de <br/>sucesso e resultados reais para sua empresa.</p>
        <img src={desteI} alt="ilustração" />
    </div>
    )
}
export default DesteI