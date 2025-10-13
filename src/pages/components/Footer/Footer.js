import styles from "../Footer/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <p>
          Siga a Zilhos:
          <Image src="/Instagram.png" width={48} height={48} alt="Instagram" />
          <Image src="/tiktok.png" width={48} height={48} alt="TikTok" />
          <Image src="/X.png" width={48} height={48} alt="X" />
          <Image src="/youtube.png" width={48} height={48} alt="YouTube" />
        </p>
      </div>

      <div className={styles.links}>
        <a href="#">Jogador</a>
        <a href="#">Quem somos?</a>
        <a href="#">Ajuda</a>
        <a href="#">Empresário</a>
        <a href="#">Cadastrar-se</a>
        <a href="#">Página Inicial</a>
        <a href="#">Clube</a>
        <a href="#">Entrar</a>
      </div>
    </footer>
  );
}
