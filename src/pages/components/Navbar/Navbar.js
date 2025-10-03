import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <div className={styles.faixaAmarela}></div>
      <div className={styles.banner}>
        <div className={styles.Logo}>
          <Image
            src="/Logo.png"
            alt="imagem-logo"
            width={416.45}
            height={105.39}
          />
          <p className={styles.subtitulo}>Subtitulo</p>
        </div>
        <div className={styles.menuHamburguer}>
          <Image
            src="/menu-hamburguer.png"
            alt="menu-hamburguer"
            width={40}
            height={30}
          />
        </div>
      </div>
    </nav>
  );
}
