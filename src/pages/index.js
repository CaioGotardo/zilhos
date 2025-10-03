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
        image="/imagemJogador.jpg"
        secondImage="/btnJogador.png"
        description="Jogadores que buscam excelência e oportunidades no futebol."
        link="/player"
      />

      <Cards
        image="/imagemEmpresario.jpg"
        secondImage="/btnEmpresario.png"
        description="Profissionais que apoiam e investem no desenvolvimento de atletas."
        link="/empresario"
      />

      <Cards
        image="/imagemClube.jpg"
        secondImage="/btnClube.png"
        description="Clubes em busca de novos talentos e parcerias estratégicas."
        link="/clube"
      />
      </div>
      <div>
        <OffersUpper />
        <OffersLow />
        <OffersLow />
        <OffersLow />
      </div>
      <Footer />
    </>
  );
}
