import styles from './Branding.module.css'
import building1 from "../../img/building1.png"
import building2 from "../../img/building2.png"
import building3 from "../../img/building3.png"
import scroll3 from "../../img/scroll3.png"

function Branding() {
    return ( 
        <div id="branding">
            <h1>start <span className={styles.verde}>Building</span></h1>
            <div className={styles.cabeca}>
                <div className={styles.pra}>
                   <p>Hora de criar Brad Management é uma estratégia de gestão da sua marca que visa torná-la mais reconhecida pelo o seu público e presença de mercado.</p>
                    <p>Nossa estratégia busca a admiração e desejo pelos valores que sua marca cria e torno de si mesma.</p> 
                </div>
                <div className={styles.praf}>
                   <p>Nosso objetivo principal é despertar sensações e criação de conexões fortes, que serão fatores relevantes para escolha do cliente pela a marca no momento de decisão de compra.</p> 
                </div>
            </div>
            <ul>
                <li className={styles.item}>
                    <img src={building1} alt="ilustração" />
                    <div className={styles.conteudo}>
                        <h3>Golden Circle</h3>
                        <p>Nesta fase iremos desenvolver o método de pensar, agir e comunicar de sua marca com o intuito de criar impacto no mundo.</p>
                        <p>Começando pelo Por quê? É o propósito do empreeendimento, o objetivo de sua iniciativas, enfim a causa que move seus projetos e campanhas.</p>
                        <p>Siga com o Como? Como sua empresa busca atingir o seu objetivo? Quais estratégias está usando para realizar a sua missão?</p>
                        <p>Acabe com o O quê? É o resultado de seu projeto, o seu produto final, a parte mais concreta do seu empreeendimento. Aqui é onde se defini o que você faz ou vende.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.conteudo}>
                        <h3>Branding All-in One</h3>
                        <p>Onde iremos usar nossas skills, para criar o conceito visual do seu projeto digital.</p>
                        <p>O Branding de seu produto como identidade visual, cores, repositório de elementos, copywriting, guias de branding, biblioteca para rede sociais, entre outros.</p>
                        <p>Para que seu projeto ganhe uma forma visual profissional e forte, onde vá se comunicar com o seu público com eficácia.</p>
                    </div>
                    <img src={building2} alt="ilustração" />
                </li>
                <li className={styles.item}>
                    <img src={building3} alt="ilustração" />
                    <div className={styles.conteudo}>
                        <h3>UI & UX Patterns</h3>
                        <p>Nesta fase iremos usar todas nossas skills necessárias identificadas na fase inicial para a criação do Protótipo de seu produto. UI Designer, UX Writter, UX Designer, tudo que for necessário para a realização do seu projeto.</p>                        
                    </div>
                </li>
            </ul>
            <img src={scroll3} alt="scroll3" />
        </div>
     );
}

export default Branding;