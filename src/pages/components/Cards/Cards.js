import styles from "./Cards.module.css";
import Image from "next/image";

export default function Cards() {
  return (
    <section>
      <div className={styles.cards} />
      <div
        className={styles.card}
        style="width: 314px; background: #419c35; color: #ffcc00"
      >
        <Image
          src="img/imagemJogador.png"
          class="img-fixa"
          alt="imagem-jogador"
        />
        <a href="#" class="imagens-links">
          <Image 
          src="img/imagemJogador.png" 
          alt="imagem-jogador"/>
        </a>
        <div class="card-body">
          <p class="card-text">
            Jogadores que buscam excelência e oportunidades no futebol.
          </p>
        </div>
      </div>
    </section>
  );
}
