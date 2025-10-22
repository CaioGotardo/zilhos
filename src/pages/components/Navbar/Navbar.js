import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("menuLateral");
      const button = document.getElementById("btnHamburguer");
      if (
        menuOpen &&
        menu &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.faixaAmarela}></div>

      <div className={styles.banner}>
        {/* Seta voltar */}
        <div className={styles.setaVoltar}>
          <Link href="/">
            <Image src="/seta-esquerda.png" alt="Voltar" width={55} height={45} />
          </Link>
        </div>

        {/* Logo */}
        <div className={styles.Logo}>
            <Image src="/Logo.png" alt="imagem-logo" width={416.45} height={105.39} />
          <p className={styles.subtitulo}>Plantando sementes, colhendo campeões</p>
        </div>

        {/* Botão hamburguer */}
        <div
          id="btnHamburguer"
          className={styles.menuHamburguer}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src="/menu-hamburguer.png" alt="menu-hamburguer" width={45} height={45} />
        </div>

        {/* Menu lateral */}
        <div
          id="menuLateral"
          className={`${styles.menuLateral} ${menuOpen ? styles.aberto : ""}`}
        >
          <h2 className={styles.tituloMenu}>Opções</h2>
          <Link href="/login" className={styles.itemMenu}>
            Entrar / Cadastrar-se
          </Link>
          <Link href="/sobre" className={styles.itemMenu}>
            Quem somos?
          </Link>
          <Link href="/ajuda" className={styles.itemMenu}>
            Ajuda
          </Link>
        </div>
      </div>
    </nav>
  );
}
