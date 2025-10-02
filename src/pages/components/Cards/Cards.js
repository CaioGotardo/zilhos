import styles from "./Cards.module.css";
import Image from "next/image";

const cardsData = [
  {
    image: "/imagemJogador.jpg",
    secondImage: "/imagemEmpresario.jpg",
    description: "Esse é o primeiro card com imagem própria."
  },
  {
    image: "/imagemEmpresario.jpg",
    secondImage: "/imagemEmpresario.jpg",
    description: "Esse é o segundo card com outra imagem."
  },
  {
    image: "/imagemClube.jpg",
    secondImage: "/imagemEmpresario.jpg",
    description: "Esse é o terceiro card diferente."
  }
];

export default function Cards() {
  return (
    <section className={styles.cards}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={card.image}
            alt={card.title}
            width={280}   // ajuste conforme seu layout
            height={271}  // ajuste conforme seu layout
            className={styles.imgFixa}
          />
          <div className={styles.cardBody}>
            <div className={styles.secondImageWrapper}>
            <Image
              src={card.secondImage}
              width={300}
              height={107}
              className={styles.secondImg}
            />
          </div>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
