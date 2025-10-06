import styles from "./Clubes.module.css";
import Image from "next/image";
import Navbar from "@/pages/components/Navbar/Navbar";
import Footer from "@/pages/components/Footer/Footer";
import Link from "next/link";

export default function Clubes() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.containerFoto}>
        <Image src="/fotoNossa.png" width={1120} height={510} alt="iamgem-fotoNossa" />
      </div>
      <div>
        <p className={styles.paragrafo}>lorem</p>
        <div className={styles.fotoSeparadas}>
          <Image src="/fotoCaio.png" width={300} height={300} alt="imagem-caio" />
          <Image src="/fotoEdu.png" width={300} height={300} alt="imagem-edu"/>
          <Image src="/fotoJao.png" width={300} height={300} alt="imagem-jao"/>
          <Image src="/fotoMat.png" width={300} height={300} alt="imagem-mat" />
          <Image src="/fotoNat.png" width={300} height={300} alt="imagem-nat"/>
          <Image src="/fotoKau.png" width={300} height={300} alt="imagem-kauan"/>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
