import Image from "next/image";
import Link from "next/link";
import styles from "./Cards.module.css";

export default function Cards({ image, icon, title, description, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={image}
          alt={title}
          width={280}
          height={180}
          className={styles.imgFixa}
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.iconWrapper}>
          <Link href={link}>
          <Image src={icon} alt={title} width={40} height={40} />
          </Link>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
