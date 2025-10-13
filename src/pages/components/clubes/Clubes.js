import styles from './Clubes.module.css';
import Image from 'next/image';
import Navbar from '@/pages/components/Navbar/Navbar';
import Footer from '@/pages/components/Footer/Footer';
import Link from 'next/link';

export default function Clube() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <div className={styles.cardClube }>
        <Image
          src="/clube.png"
          alt="imagem-clube"
          width={250}
          height={293}
        />
        <p className={styles.titulo}>Clube</p>
      </div>

      <div className={styles.paragrafo}>
        <p>
          Encontre o reforço ideal para o seu time com precisão e agilidade. Nossa plataforma é um verdadeiro radar de 
          talentos, permitindo que você navegue por perfis detalhados de jogadores, filtrando por posição, idade, histórico
          e muito mais. Faça a prospecção da sua próxima contratação de forma inteligente, negocie diretamente com atletas 
          e empresários e fortaleça seu elenco com os nomes certos. O futuro do seu clube está em jogo.
        </p>

        <p>
          Economize tempo e recursos com um processo de scouting moderno e eficaz. Descubra talentos escondidos, receba informações 
          verificadas e feche negócios de forma ágil. A nossa plataforma é a ferramenta que faltava para otimizar a sua estratégia 
          de contratação e montar o time dos seus sonhos.
        </p>

        <p>
          O scouting tradicional é coisa do passado. Revolucione seu departamento de futebol com uma ferramenta que coloca o mercado 
          inteiro na palma da sua mão. Busque por jogadores com as características exatas que seu time precisa, compare perfis, 
          monitore o desenvolvimento de atletas e negocie de forma direta, economizando tempo e recursos. O próximo título começa 
          na nossa plataforma.
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
