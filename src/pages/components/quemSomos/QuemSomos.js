import styles from "./QuemSomos.module.css";
import Image from "next/image";
import Footer from "@/pages/components/Footer/Footer";

export default function QuemSomos() {
  return (
    <>

      <div className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.titulo}>Quem Somos?</h1>
        
          <div className={styles.fotoContainer}>
            <Image
              src="/fotoNossa.png"
              width={1120}
              height={510}
              alt="foto do grupo Ginga"
              className={styles.foto}
            />
          </div>

          <p className={styles.texto}>
         Na Zilhos, acreditamos que o talento precisa estar no lugar certo para brilhar. 
         Somos uma ponte estratégica que conecta atletas de futebol, empresários e clubes, 
         criando oportunidades reais para que carreiras sejam construídas com solidez e transparência. 
         Nosso trabalho vai além da simples intermediação: entendemos as necessidades de cada parte envolvida, 
         buscamos parcerias justas e fortalecemos relações que geram resultados. Com dedicação, profissionalismo
         e paixão pelo futebol, transformamos potenciais em histórias de sucesso, ajudando cada atleta a chegar mais longe.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
