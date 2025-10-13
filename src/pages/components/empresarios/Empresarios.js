import styles from './Empresarios.module.css';
import Image from 'next/image';
import Navbar from '@/pages/components/Navbar/Navbar';
import Footer from '@/pages/components/Footer/Footer';
import Link from 'next/link';

export default function Empresario() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <div className={styles.cardEmpresario }>
        <Image
          src="/empresario.png"
          alt="imagem-empresario"
          width={250}
          height={293}
        />
        <p className={styles.titulo}>Empresário</p>
      </div>

      <div className={styles.paragrafo}>
        <p>
          A nova geração de craques está à sua espera. Descubra e gerencie talentos promissores de forma eficiente e 
          estratégica. Nossa plataforma oferece ferramentas para que você encontre, analise e se comunique diretamente 
          com jogadores, otimizando o seu tempo e ampliando sua rede de contatos. Encontre a próxima estrela, feche 
          negócios e ajude a moldar carreiras de sucesso. Seu próximo grande negócio está a um clique.
        </p>

        <p>
         Nós oferecemos mais que um banco de dados: entregamos inteligência de mercado. Use filtros avançados para encontrar 
         o perfil ideal, analise o desempenho e o potencial de atletas de forma objetiva e comece negociações com transparência 
         e segurança. Aumente a eficiência do seu trabalho e construa um portfólio de sucesso.
        </p>

        <p>
         O sucesso de um agente está em encontrar a próxima grande estrela antes de todo mundo. Nossa plataforma é sua bútebula,
        permitindo que você navegue por um vasto universo de talentos, de promessas da base a atletas experientes. Filtre por 
        atributos, analise o potencial de cada jogador e inicie conversas com transparência e segurança. Deixe o acaso de lado 
        e construa um portfólio de campeões com dados, inteligência e as conexões certas.
        </p>

        <Link href="/">
          <button className={styles.btn}>Criar Conta</button>
        </Link>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
