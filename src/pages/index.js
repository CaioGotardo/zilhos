import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import OffersUpper from './components/Offers/OffersUpper/OffersUpper';
import OffersLow from './components/Offers/OffersLow/OffersLow';
import Footer from './components/Footer/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex justify-around'>
       <Cards
        image="/imagemJogador.png"
        icon="/player.png"
        title="Jogador"
        description="Jogadores que buscam excelência e oportunidades no futebol."
        link="/Player"
      />

      <Cards
        image="/imagemEmpresario.png"
        icon="/empresario.png"
        title="Empresário"
        description="Gerenciam carreiras de atletas, negociam contratos e patrocínios."
        link="/empresarios"
      />

      <Cards
        image="/imagemClube.png"
        icon="/clube.png"
        title="Clube"
        description="Organizações que competem, desenvolvem talentos e engajam torcedores."
        link="/Clubes"
      />
      </div>
      <div>
        <OffersUpper />
        <OffersLow />
       
      </div>
      <Footer />
    </>
  );
}
