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
        <Image src="/fotoNossa.png" width={1120} height={510} />
      </div>
      <div>
        <p className={styles.paragrafo}>lorem</p>
        <div className={styles.fotoSeparadas}>
          <Image src="/fotoCaio.png" width={300} height={300} />
          <Image src="/fotoEdu.png" width={300} height={300} />
          <Image src="/fotoJao.png" width={300} height={300} />
          <Image src="/fotoMat.png" width={300} height={300} />
          <Image src="/fotoNat.png" width={300} height={300} />
          <Image src="/fotoKau.png" width={300} height={300} />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
