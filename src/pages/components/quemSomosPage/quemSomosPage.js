import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import styles from "./quemSomosPage.module.css";
import Footer from "../Footer/Footer";

export default function QuemSomosPage() {
  return (
    <>
      <Navbar />

      <div className={styles.containerImg}>
        <Image
          src="/QuemSomos.png"
          width={1117}
          height={510}
          alt="foto do grupo Ginga"
          className={styles.foto}
        />
      </div>

      <div className={styles.paragrafo}>
        <p className={styles.paragrafoUm}>
          Somos uma empresa idealizada por seis jovens de 17 anos, estudantes do ensino médio técnico, movidos pela paixão pelo futebol e pelo desejo de transformar o cenário esportivo. Nosso propósito é conectar atletas de base, empresários esportivos e clubes de futebol, criando uma rede sólida de oportunidades, crescimento e desenvolvimento profissional.
        </p>
        <p className={styles.paragrafoDois}>
          Acreditamos que o talento precisa de visibilidade e suporte para alcançar seu potencial máximo. Por isso, trabalhamos para aproximar jovens promissores do esporte com agentes preparados e instituições reconhecidas, garantindo credibilidade e segurança em cada etapa do processo.
        </p>
        <p className={styles.paragrafoTres}>
          Com determinação, espírito inovador e visão de futuro, buscamos consolidar nossa empresa como referência no mercado esportivo, oferecendo soluções que beneficiem não apenas atletas e clubes, mas também toda a comunidade do futebol.
        </p>
      </div>

      <div className={styles.fotos}>
        <div className={styles.membro}>
          <Image src="/FotoCaio.png" width={300} height={300} alt="Caio Gotardo" />
          <p>Caio Gotardo</p>
        </div>

        <div className={styles.membro}>
          <Image src="/FotoEdu.png" width={300} height={300} alt="Eduardo Oliveira" />
          <p>Eduardo Oliveira</p>
        </div>

        <div className={styles.membro}>
          <Image src="/Fotojao.png" width={300} height={300} alt="João Conturbia" />
          <p>João Conturbia</p>
        </div>

        <div className={styles.membro}>
          <Image src="/FotoKauan.png" width={300} height={300} alt="Kauan Mattos" />
          <p>Kauan Mattos</p>
        </div>

        <div className={styles.membro}>
          <Image src="/FotoMatheus.png" width={300} height={300} alt="Matheus Oliveira" />
          <p>Matheus Oliveira</p>
        </div>

        <div className={styles.membro}>
          <Image src="/FotoNatan.png" width={300} height={300} alt="Natan Bernardini" />
          <p>Natan Bernardini</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
