import Home from './componentes/paginas/Home';
import Onboarding from './componentes/paginas/Onboarding';
import GoToMarket from './componentes/paginas/GoToMarket';
import Contatos from './componentes/paginas/Contatos';
import NaveBar from './componentes/Layout/NaveBar';
import Footer from './componentes/Layout/Footer';
import Develop from './componentes/paginas/Develop';
import YourWay from './componentes/paginas/YourWay';
import MelhoresP from './componentes/paginas/MelhoresP';
import DesteI from './componentes/paginas/DesteI';
import QuemJ from './componentes/paginas/QuemJ';
import Branding from './componentes/paginas/Branding';
import Conteiner from './componentes/Layout/Conteiner';

function Page() {
    return(
        <div className="page">
            <NaveBar/>
            <Conteiner customClass='minHeight'>
                <Home/>
                <Onboarding/>
                <Branding/>
                <Develop/>
                <GoToMarket />
                <YourWay/>
                <MelhoresP/>
                <DesteI/>
                <QuemJ/>
                <Contatos/>     
                </Conteiner>
            <Footer/>
        </div>
    )
}
export default Page