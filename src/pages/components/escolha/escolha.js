import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer/Footer";
import style from "./escolha.module.css";

export default function Escolha() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <div className={style.container}>
        <h1 className={style.tipoPerfil}>Qual tipo de perfil você pretende criar?</h1>

        <div className={style.opcao}>
          <Link href="/cadastro/jogador" className={style.botao}>
            <Image src="/player.png" width={70} height={70} alt="Jogador" />
            <p>Jogador</p>
          </Link>
        </div>

        <div className={style.opcao}>
          <Link href="/cadastro/empresario" className={style.botao}>
            <Image src="/empresario.png" width={70} height={70} alt="Empresário" />
            <p>Empresário</p>
          </Link>
        </div>

        <div className={style.opcao}>
          <Link href="/cadastro/clube" className={style.botao}>
            <Image src="/clube.png" width={70} height={70} alt="Clube" />
            <p>Clube</p>
          </Link>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}