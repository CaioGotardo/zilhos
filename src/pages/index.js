import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import OffersUpper from './components/Offers/OffersUpper/OffersUpper';
import OffersLow from './components/Offers/OffersLow/OffersLow';
import Footer from './components/Footer/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <div>
       <Cards
        image="/imagemJogador.png"
        secondImage="/player.png"
        description="Jogadores que buscam excelência e oportunidades no futebol."
        link="/Player"
      />

      <Cards
        image="/imagemEmpresario.png"
        secondImage="/empresario.png"
        description="Gerenciam carreiras de atletas, negociam contratos e patrocínios."
        link="/Empresarios"
      />

      <Cards
        image="/imagemClube.png"
        secondImage="/clube.png"
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
