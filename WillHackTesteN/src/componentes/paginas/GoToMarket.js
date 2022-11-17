import styles from './GoToMarket.module.css'
import gotomarket from "../../img/gotomarket1.png"
import scroll5 from "../../img/scroll5.png"

function GoToMarket() {
    return ( 
        <div className={styles.boarding} id="gotomarket">
            <h1>and <span>Hack...</span></h1>
            <div className={styles.corpo}>
                <div>
                    <p>Produto, branding, desenvolvimento, dados, vendas, performance e growth tudo em harmonia. É hora de Lançar no Mercado! Ajudamos na consolidação da sua presença de merca, aumentando exponencialmente as vendas de forma digital.</p>
                    <img src={gotomarket} alt="inlustração"/>
                </div>
                <div>
                    <p>Com metodologia própria em todas as etapas da jornada de compra, atraindo e convertendo clientes para o seu negócio. Esta etapa final também é dividida em 3 fases.</p>
                    <h3>Digital Authority</h3>
                    <p>Nosso squad especializado em marketing digital com foco em vendas, o nosso negócio é performance. Toda nossa metodologia é baseada em Growth Hacking, por isso somos especilistas em estratégias, métricas de dados, vendas e marketing. Nosso trabalho é fazer empresas crescerem e venderem exponencialmente no mercado digital.</p>
                    <h3>Growth Hacking & Performance</h3>
                    <p>O Growth Hacking é, resumidamente, um subcampo do marketing focado no rápido e exponencial crescimento de uma empresa. Seja ela de pequeno ou médio porte, o growth busca por estratégias de desenvolvimento acelerado.</p>
                    <h3>Grow Methodology</h3>
                    <p>Temos nossa própria metodologia para qualquer empresa, de qualquer segmento, tenha a oportunidade de experimentar novas soluções e resultados ágeis.</p> 
                </div>
            </div>
            <img className={styles.scroll} src={scroll5} alt="scroll5" />
        </div>
     );
}

export default GoToMarket;