// Cards.jsx (vai renderizar apenas 1 card por vez)
import Image from "next/image";
import Link from "next/link";
import styles from "./Cards.module.css";

export default function Cards({ image, secondImage, description, link }) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt="Imagem principal"
        width={280}
        height={271}
        className={styles.imgFixa}
      />

      <div className={styles.cardBody}>
        <div className={styles.secondImageWrapper}>
          <Link href={link}>
            <Image
              src={secondImage}
              alt="Botão do card"
              width={300}
              height={107}
              className={styles.secondImg}
            />
          </Link>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}
