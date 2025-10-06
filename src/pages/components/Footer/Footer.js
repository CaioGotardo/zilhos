import styles from "../Footer/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          Siga a Zilhos:
          <Image src="/Instagram.png"
          width={48}
          height={48}
           />
          <Image src="/tiktok.png"
           width={48}
          height={48} 
          
          />
          <Image src="/X.png"
           width={48}
          height={48} 
          />
          <Image src="/youtube.png"
           width={48}
          height={48}
           />
        </p>
      </div>
      <div>
        <a href="">Jogador</a>
        <a href="">Quem somos ?</a>
        <a href="">Ajuda</a>
        <a href="">Empresario</a>
        <a href="">Cadastra-se</a>
        <a href="">Página Inicial</a>
        <a href="">Clube</a>
        <a href="">Entrar</a>
      </div>
    </footer>
  );
}
