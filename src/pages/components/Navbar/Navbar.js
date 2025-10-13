import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.faixaAmarela}></div>

      <div className={styles.banner}>
        <div className={styles.setaVoltar}>
          <Link href="/">
            <Image
              src="/seta-esquerda.png"
              alt="Voltar"
              width={55}
              height={45}
            />
          </Link>
        </div>

        <div className={styles.Logo}>
          <Link href="/">
          <Image
            src="/Logo.png"
            alt="imagem-logo"
            width={416.45}
            height={105.39}
            />
            </Link>
          <p className={styles.subtitulo}>
            Plantando sementes, colhendo campeões
          </p>
        </div>

        <div className={styles.menuHamburguer}>
          <Image
            src="/menu-hamburguer.png"
            alt="menu-hamburguer"
            width={45}
            height={45}
          />
        </div>
      </div>
    </nav>
  );
}
