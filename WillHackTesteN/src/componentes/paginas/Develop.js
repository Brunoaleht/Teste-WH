import styles from './Develop.module.css'
import dream1 from "../../img/dream1.png"
import dream2 from "../../img/dream2.png"
import dream3 from "../../img/dream3.png"
import dream4 from "../../img/dream4.png"
import scroll4 from "../../img/scroll4.png"

function Develop() {
    return(
        <div className={styles.corpo} id="develop">
            <h1>your <span className={styles.rosa}>Dream</span></h1>
            <div className={styles.cabeca}>
               <div className={styles.praf1}>
                    <p>Desenvolver e otimizar performance de alta velocidade em seus sites, plataformas e aplicativos. Com a clareza dos processos que obtivemos no ONBOARDING, sabemos o caminho a seguir, com isso, um Squad focado 100% estará alocado no desenvolvimento.</p>
                </div>
                <div className={styles.praf1}>
                   <p>Essa etapa é literalmente a "mão na massa" iremos desenvolver tudo que imaginou! Essa etapa é dividida em 3 fases.</p>  
                </div>
            </div>
            <ul>
                <li className={styles.item}>
                    <img src={dream1} alt="ilustração" />
                    <div className={styles.conteudo}>
                        <h3>MVp All-in-One</h3>
                        <p>Nesta fase iremos preiozar as funções essenciais de seu projeto, para que sejam aprimorados com plena eficácia ao longo do desenvolvimento.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src={dream2} alt="ilustração" />
                    <div className={styles.conteudo}>
                       <h3>Product Evolution</h3>
                        <p>Depois das funções essesciais 100% funcionais, nesta fase iremos mapear as funções adicionais e criar um calendário de atualizações para a evolução da sua aplicação.</p> 
                    </div>
                </li>
                <li className={styles.item}>
                    <img src={dream3} alt="ilustração" />
                    <div className={styles.conteudo}>
                      <h3>Application Testing</h3>
                        <p>Com tudo definido e funcional chegou a fase de testes e bug fix. Aqui é onde rever todo o código, todas as funções e procurar e avaliar cirurgicamente todos os possíveis bugs e aprimorar ainda mais.</p>  
                    </div>
                </li>
            </ul>
            <p>+30 FRAMEWORK E TECNOLOGIAS</p>
            <img src={dream4} alt="ilustração" />
            <div>
                <img className={styles.scroll} src={scroll4} alt="scroll4" />
            </div>
            
        </div>
    )
}
export default Develop;