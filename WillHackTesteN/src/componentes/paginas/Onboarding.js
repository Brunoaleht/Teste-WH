import styles from './Onboarding.module.css'
import boarding from "../../img/boarding1.png"
import sroll2 from "../../img/scroll2.png"

function Onboarding() {
    return ( 
        <div className={styles.boarding} id="onboarding">
                <h1>is there's a <span>Will...</span></h1>
            <div className={styles.corpo}>
                <div>
                    <p>Primeiro, entendemos os desafios do seu negócio. Assim então juntamos os melhores profissionais do mercado para resolver. Simples assim</p>
                    <img src={boarding} alt="ilustração"/> 
                </div>
                <div>
                    <p>Acreditamos na clareza em todo o processo, com agilidade em cada decisão. Geramos valor através de sprints interativos, garantindo alta qualidade em cada entrega.</p>
                    <h3>Product Discovery</h3>
                    <p>Para validar e priorizar múltiplas hipóteses de produto, vendo todos os requisitos do projeto, conseguido focar naquela com maior potencial de ROI. A gente joga junto para você investir onde tem mais retorno. Tendo todos os dados seguimos para completar as 2 próximas fases simultaneamente.</p>
                    <h3>Product & Marketing Map</h3>
                    <p>Nesta fase iremos mapear todas as ações identificadas na fase anterior. Um mapeamento de todas as etapas do projeto e determinar todos os processos até o momento para ser lançado.</p>
                    <p>Funções, linguagem, sprints, público-alvo, estratégias... garantindo qualidade em cada etapa.</p>
                    <h3>Wireframe & Documentation</h3>
                    <p>Com tudo mapeado, iremos desenvolver a documentação completa do seu proheto e o wireframe primário, projetando todas as telas da aplicação e também todos fluxos de user journey, fluxos de captação de users e muito mais.</p> 
                </div>
            </div>
            <img src={sroll2} alt="scroll2" />
        </div>
     );
}

export default Onboarding;