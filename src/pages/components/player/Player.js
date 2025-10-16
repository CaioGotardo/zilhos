import styles from './Player.module.css';
import Image from 'next/image';
import Navbar from '@/pages/components/Navbar/Navbar';
import Footer from '@/pages/components/Footer/Footer';
import Link from 'next/link';

export default function Player() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <div className={styles.cardPlayer}>
        <Image
          src="/player.png"
          alt="imagem-player"
          width={250}
          height={293}
        />
        <p className={styles.titulo}>Jogador</p>
      </div>

      <div className={styles.paragrafo}>
        <p>
          Você sonha em viver do futebol? Na nossa plataforma, transformamos seu potencial em realidade. 
          Crie seu perfil completo, com vídeos, estatísticas e histórico de performance, e coloque sua 
          carreira na vitrine para os maiores clubes e empresários do mundo. Conecte-se com as pessoas certas, 
          receba propostas e construa seu futuro no esporte que você ama. Sua jornada começa aqui.
        </p>

        <p>
          Chega de esperar que uma oportunidade caia do céu. Com seu perfil completo e atualizado, você se 
          torna o protagonista da sua história. Receba convites para testes, propostas de contratos e conselhos 
          de quem entende do assunto. A nossa tecnologia te coloca em evidência para a rede certa de profissionais, 
          garantindo que seu esforço no campo seja recompensado com reconhecimento e as melhores propostas.
        </p>

        <p>
          Seu talento merece ser visto. Cansado de esperar por uma chance? Nós te damos as rédeas da sua carreira. 
          Construa um perfil completo, com vídeos dos seus melhores lances, estatísticas precisas e um histórico 
          de performance que fala por si. Nossa tecnologia de ponta analisa suas habilidades e o conecta diretamente 
          com os clubes e agentes que buscam o seu perfil ideal. Sua paixão é o seu motor, e nós somos a pista 
          para o seu sucesso.
        </p>

        <Link href="/cadastroj">
          <button className={styles.btn}>Criar Conta</button>
        </Link>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
