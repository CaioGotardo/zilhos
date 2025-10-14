import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <span className={styles.followText}>Siga a Zilhos:</span>

          <div className={styles.icons}>
            <Image src="/Instagram.png" alt="Instagram" width={48} height={48} />
            <Image src="/tiktok.png" alt="TikTok" width={48} height={48} />
            <Image src="/X.png" alt="X" width={48} height={48} />
            <Image src="/youtube.png" alt="YouTube" width={48} height={48} />
          </div>
        </div>

        <nav className={styles.links} aria-label="Footer links">
          <div>
<Link href="/player">
            <p>Jogador</p>
</Link>
<Link href="/empresario">
            <p>Empresário</p>
</Link>
<Link href="/clubes">
            <p>Clube</p>
</Link>
          </div>

          <div>
            <Link href="/quemSomosPage">
            <p>Quem somos?</p>
            </Link>
            <Link href="/cadastro">
            <p>Cadastre-se</p>
            </Link>
            <Link href="/entrar">
            <p>Entrar</p>
            </Link>
          </div>

          <div>
            <Link href="/ajuda">
            <p >Ajuda</p>
            </Link>
            <Link href="/">
            <p>Página Inicial</p>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
