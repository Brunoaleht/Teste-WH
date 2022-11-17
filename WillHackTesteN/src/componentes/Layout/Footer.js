import {FaFacebook, FaInstagram, FaLinkedin, FaBehanceSquare, FaTwitter, FaTiktok} from 'react-icons/fa'
import rodaP from "../../img/rodaPe.png"

import styles from './Footer.module.css'
function Footer() {
    return ( 
        <div>
            <footer className={styles.footer}>
                <ul className={styles.socialLista}>
                    <li><FaLinkedin /></li>
                    <li><FaBehanceSquare/></li>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter/></li>
                    <li><FaTiktok/></li>
                </ul>
                <div className={styles.linha}>
                    <ul className={styles.lista}>
                        <li><h5>Empresa</h5></li>
                        <li>Início</li>
                        <li>Blog</li>
                        <li>Sobre</li>
                        <li>Clientes</li>
                        <li>Comunidade</li>
                        <li>Contato</li>
                    </ul>
                    <ul className={styles.lista}>
                        <li><h5>Serviços</h5></li>
                        <li>Product</li>
                        <li>Branding</li>
                        <li>Desenvolvimento</li>
                        <li>Marketing Digital</li>
                        <li>Growth Hacking</li>
                        <li>Consultorias</li>
                    </ul>
                    <ul className={styles.lista}>
                        <li><h5>Serviços Premium</h5></li>
                        <li>Will.Starter</li>
                        <li>Will.All-in-One</li>
                        <li>Will.Digital-Sales</li>
                        <li>Will.Sale-Performance</li>
                        <li>Will.Growth-Hacking</li>
                    </ul>
                    <ul className={styles.lista}>
                        <li><h5>Legal</h5></li>
                        <li>Termos & Condições</li>
                        <li>Política de Privacidade</li>
                        <li>Política de Cookies</li>
                        <li>Configuração de Cookies</li>
                    </ul>
                </div>
                <div className={styles.final}>                
                    <div className={styles.imagem}>
                        <img src={rodaP} alt="RodaPe" />
                    </div>
                    <p className={styles.copy}><span>Will.Hack</span> &copy; 2022</p>
                </div>

            </footer>
        </div> 
    );
}

export default Footer;