import "@/styles/globals.css";
import Home from "./index.js";
import Cards from "./components/Cards/Cards.js";
import Who from "./components/Who/Who.js";
export default function App({  }) {
  return 
  <Home />;
  <div>

   <Cards
          image="/images/jogador.jpg"
          secondImage= "/imagemEmpresario.jpg"

          description="Jogadores que buscam excelência e oportunidades no futebol."
        />
        <Cards
          image="/images/empresario.jpg"
              secondImage="/imagemEmpresario.jpg"

          description="Profissionais que apoiam e investem no desenvolvimento de atletas."
        />
        <Cards
          image="/images/clube.jpg"
              secondImage= "/imagemEmpresario.jpg"

          description="Clubes em busca de novos talentos e parcerias estratégicas."
        />
          </div>

}
