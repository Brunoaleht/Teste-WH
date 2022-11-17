import quemj from "../../img/quemj1.png"
import styles from "./QuemJ.module.css"

function QuemJ() {
    return(
        <div>
            <h1>Quem já passou pela a Jornada Will.Hack</h1>
            <p>A gente antende seus dasafios. É por isso que fazemos diferente: combinamos<br/> times de alta performance e metodologias ágeis para oferecer produtos de<br/> sucesso e resultados reais para sua empresa.</p>
            <div className={styles.row}>
                <div className={styles.card}>
                    <h4>"</h4>
                    <p>É doloroso montar um squad seguindo os processos tradicionais. Essa é a grande vantagem da WILL.HACK. Eles conseguiram entragar as pessoas certas erápido e conseguimos avança com muito mais foco.</p>
                    <div className={styles.imagem}>
                        <img src={quemj} alt="" />
                    </div>
                </div>
                <div className={styles.card}>
                    <h4>"</h4>
                    <p>A WILL.HACK exedeu minhas expectativas na questão agilidade. Me impressionou o quão rápido foi possível alacar o squad e já começar o desenvolvimento. Vamos colocar o produto no ar para teste na velocidade esperada, sem perder time-to-market</p>
                    <div className={styles.imagem}>
                       <img className={styles.dimensao} src={quemj} alt="" /> 
                    </div>
                </div>
                <div className={styles.card}>
                    <h4>"</h4>
                    <p>A WILL.HACK é incrível. Conheço talentos de todo pais e aprendo muito. Tenho o privilégio de realizar meus projetos com rapidez e qualidade veja a escalabilidade de minha receita.</p>
                    <div className={styles.imagem}>
                       <img src={quemj} alt="" /> 
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default QuemJ